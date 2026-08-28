//#region ../../../node_modules/.pnpm/highlight.js@11.12.0/node_modules/highlight.js/es/languages/json.js
var EXTENDED_NUMBER_MODE = {
	scope: "number",
	match: "([-+]?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)|NaN|[-+]?Infinity",
	relevance: 0
};
function json(hljs) {
	const ATTRIBUTE = {
		className: "attr",
		begin: /(("(\\.|[^\\"\r\n])*")|('(\\.|[^\\'\r\n])*'))(?=\s*:)/,
		relevance: 1.01
	};
	const PUNCTUATION = {
		match: /[{}[\],:]/,
		className: "punctuation",
		relevance: 0
	};
	const LITERALS = [
		"true",
		"false",
		"null"
	];
	const LITERALS_MODE = {
		scope: "literal",
		beginKeywords: LITERALS.join(" ")
	};
	return {
		name: "JSON",
		aliases: ["jsonc", "json5"],
		keywords: { literal: LITERALS },
		contains: [
			ATTRIBUTE,
			PUNCTUATION,
			hljs.APOS_STRING_MODE,
			hljs.QUOTE_STRING_MODE,
			LITERALS_MODE,
			EXTENDED_NUMBER_MODE,
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE
		],
		illegal: "\\S"
	};
}
//#endregion
export { json as t };
