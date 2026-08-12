const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const targetRelativePath = 'packages/frontend/@n8n/i18n/src/index.ts';
const cnImport = "import cnBaseText from './locales/zh-CN.json';";

function readArguments(argv) {
	const argumentsMap = new Map();

	for (let index = 0; index < argv.length; index += 2) {
		const name = argv[index];
		const value = argv[index + 1];

		if (!name?.startsWith('--') || !value) {
			throw new Error(`无效参数: ${name ?? ''}`);
		}

		argumentsMap.set(name.slice(2), value);
	}

	for (const requiredName of ['n8n-dir', 'patch-file', 'version']) {
		if (!argumentsMap.has(requiredName)) {
			throw new Error(`缺少参数: --${requiredName}`);
		}
	}

	return {
		n8nDir: path.resolve(argumentsMap.get('n8n-dir')),
		patchFile: path.resolve(argumentsMap.get('patch-file')),
		version: argumentsMap.get('version'),
	};
}

function findMatchingBrace(source, openingBraceIndex) {
	let depth = 0;
	let quote = null;
	let escaped = false;
	let lineComment = false;
	let blockComment = false;

	for (let index = openingBraceIndex; index < source.length; index += 1) {
		const character = source[index];
		const nextCharacter = source[index + 1];

		if (lineComment) {
			if (character === '\n') lineComment = false;
			continue;
		}

		if (blockComment) {
			if (character === '*' && nextCharacter === '/') {
				blockComment = false;
				index += 1;
			}
			continue;
		}

		if (quote) {
			if (escaped) {
				escaped = false;
			} else if (character === '\\') {
				escaped = true;
			} else if (character === quote) {
				quote = null;
			}
			continue;
		}

		if (character === '/' && nextCharacter === '/') {
			lineComment = true;
			index += 1;
			continue;
		}

		if (character === '/' && nextCharacter === '*') {
			blockComment = true;
			index += 1;
			continue;
		}

		if (character === "'" || character === '"' || character === '`') {
			quote = character;
			continue;
		}

		if (character === '{') depth += 1;
		if (character === '}') depth -= 1;

		if (depth === 0) return index;
	}

	throw new Error('无法找到匹配的右花括号');
}

function insertCnMessage(configSource) {
	if (/['"]zh-CN['"]\s*:\s*cnBaseText/.test(configSource)) return configSource;
	if (/['"]zh-CN['"]\s*:/.test(configSource)) {
		throw new Error("messages 已包含非 cnBaseText 的 'zh-CN' 配置，请检查上游变更");
	}

	const messagesMatch = /\bmessages\s*:/.exec(configSource);
	if (!messagesMatch) throw new Error('createI18n 配置中未找到 messages');

	const openingBraceIndex = configSource.indexOf('{', messagesMatch.index + messagesMatch[0].length);
	if (openingBraceIndex === -1) throw new Error('messages 不是对象字面量');

	const closingBraceIndex = findMatchingBrace(configSource, openingBraceIndex);
	const body = configSource.slice(openingBraceIndex + 1, closingBraceIndex);
	let nextBody;

	if (body.includes('\n')) {
		const closingLineStart = configSource.lastIndexOf('\n', closingBraceIndex) + 1;
		const closingIndent = configSource.slice(closingLineStart, closingBraceIndex).match(/^\s*/)[0];
		const existingEntry = body.split('\n').find((line) => line.trim());
		const entryIndent = existingEntry?.match(/^\s*/)[0] ?? `${closingIndent}\t`;
		const bodyWithoutTrailingWhitespace = body.replace(/\s*$/, '');
		const separator = bodyWithoutTrailingWhitespace.trimEnd().endsWith(',') ? '' : ',';

		nextBody = `${bodyWithoutTrailingWhitespace}${separator}\n${entryIndent}'zh-CN': cnBaseText,\n${closingIndent}`;
	} else {
		const leadingWhitespace = body.match(/^\s*/)[0];
		const trailingWhitespace = body.match(/\s*$/)[0];
		const existingMessages = body.trim();
		const separator = !existingMessages ? '' : existingMessages.endsWith(',') ? ' ' : ', ';

		nextBody = `${leadingWhitespace}${existingMessages}${separator}'zh-CN': cnBaseText${trailingWhitespace}`;
	}

	return `${configSource.slice(0, openingBraceIndex + 1)}${nextBody}${configSource.slice(closingBraceIndex)}`;
}

function updateI18nSource(source) {
	let nextSource = source;

	if (!nextSource.includes(cnImport)) {
		const englishImport = "import englishBaseText from './locales/en.json';";
		const englishImportCount = nextSource.split(englishImport).length - 1;
		if (/from\s+['"]\.\/locales\/zh-CN\.json['"]/.test(nextSource)) {
			throw new Error('源码已使用其他方式导入 zh-CN.json，请检查上游变更');
		}

		if (englishImportCount !== 1) {
			throw new Error(`期望找到一个英文语言包导入，实际找到 ${englishImportCount} 个`);
		}

		nextSource = nextSource.replace(englishImport, `${englishImport}\n${cnImport}`);
	}

	const instanceIndex = nextSource.indexOf('export const i18nInstance');
	if (instanceIndex === -1) throw new Error('未找到 i18nInstance 声明');

	const createI18nIndex = nextSource.indexOf('createI18n(', instanceIndex);
	if (createI18nIndex === -1) throw new Error('未找到 createI18n 调用');

	const openingBraceIndex = nextSource.indexOf('{', createI18nIndex);
	if (openingBraceIndex === -1) throw new Error('createI18n 参数不是对象字面量');

	const closingBraceIndex = findMatchingBrace(nextSource, openingBraceIndex);
	let configSource = nextSource.slice(openingBraceIndex, closingBraceIndex + 1);

	if (!/\blocale\s*:\s*['"]zh-CN['"]/.test(configSource)) {
		const localePattern = /(\blocale\s*:\s*)['"]en['"]/;
		if (!localePattern.test(configSource)) {
			throw new Error("createI18n 配置中的 locale 不是 'en'，请检查上游变更");
		}
		configSource = configSource.replace(localePattern, "$1'zh-CN'");
	}

	configSource = insertCnMessage(configSource);
	nextSource = `${nextSource.slice(0, openingBraceIndex)}${configSource}${nextSource.slice(closingBraceIndex + 1)}`;

	if (!nextSource.includes(cnImport)) throw new Error('中文语言包导入写入失败');
	if (!/\blocale\s*:\s*['"]zh-CN['"]/.test(configSource)) throw new Error('默认语言写入失败');
	if (!/['"]zh-CN['"]\s*:\s*cnBaseText/.test(configSource)) throw new Error('中文消息写入失败');

	return nextSource;
}

function main() {
	const { n8nDir, patchFile, version } = readArguments(process.argv.slice(2));
	const targetFile = path.join(n8nDir, targetRelativePath);
	const source = fs.readFileSync(targetFile, 'utf8');
	const nextSource = updateI18nSource(source);

	fs.writeFileSync(targetFile, nextSource);

	const diff = execFileSync(
		'git',
		['-C', n8nDir, 'diff', '--no-ext-diff', '--', targetRelativePath],
		{ encoding: 'utf8' },
	);

	if (!diff.trim()) throw new Error('未生成国际化源码差异');

	fs.mkdirSync(path.dirname(patchFile), { recursive: true });
	fs.writeFileSync(patchFile, `Subject: [PATCH] feat: i18n import zhCn for ${version}\n---\n${diff}`);

	execFileSync('git', ['-C', n8nDir, 'apply', '--check', '--reverse', patchFile], {
		stdio: 'inherit',
	});

	console.log(`已根据 ${version} 生成并应用国际化补丁: ${patchFile}`);
}

main();
