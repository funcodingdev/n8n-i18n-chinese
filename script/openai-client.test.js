const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { readConfig, createTranslator } = require('./openai-client');

const env = {
    OPENAI_BASE_URL: 'https://gateway.example/v1/',
    OPENAI_MODEL: 'provider/configured-model',
    OPENAI_API_KEY: 'test-secret',
};

function completion(content = '你好 {name}', finishReason = 'stop') {
    return new Response(JSON.stringify({
        choices: [{ message: { content }, finish_reason: finishReason }],
    }), { headers: { 'Content-Type': 'application/json' } });
}

test('base URL keeps the gateway prefix and normalizes trailing slashes', () => {
    for (const prefix of ['/v1', '/openai', '/openai/v1', '/custom/api']) {
        const config = readConfig({ ...env, OPENAI_BASE_URL: 'https://gateway.example' + prefix + '///' });
        assert.equal(config.endpoint, 'https://gateway.example' + prefix + '/chat/completions');
        assert.equal(config.model, env.OPENAI_MODEL);
        assert.equal(config.concurrency, 2);
    }
    assert.equal(readConfig({ ...env, OPENAI_API_CONCURRENT: '3' }).concurrency, 3);
});

test('missing credentials, invalid gateway URLs, and invalid concurrency fail before requesting', () => {
    for (const name of ['OPENAI_BASE_URL', 'OPENAI_MODEL', 'OPENAI_API_KEY']) {
        assert.throws(() => readConfig({ ...env, [name]: '' }), new RegExp(name));
    }
    for (const baseUrl of ['file:///tmp/api', 'not-a-url', 'https://key@example.com/v1',
        'https://gateway.example/v1?key=secret', 'https://gateway.example/v1/chat/completions']) {
        assert.throws(() => readConfig({ ...env, OPENAI_BASE_URL: baseUrl }), /OPENAI_BASE_URL/);
    }
    for (const value of ['0', '-1', '1.5', 'invalid']) {
        assert.throws(() => readConfig({ ...env, OPENAI_API_CONCURRENT: value }), /OPENAI_API_CONCURRENT/);
    }
});

test('custom gateway receives standard Bearer auth, exact model ID, and original placeholders', async () => {
    let calls = 0;
    const translate = createTranslator(env, {
        fetchImpl: async (endpoint, request) => {
            calls++;
            assert.equal(endpoint, 'https://gateway.example/v1/chat/completions');
            assert.equal(request.method, 'POST');
            assert.equal(request.headers.Authorization, 'Bearer test-secret');
            assert.equal(request.headers['HTTP-Referer'], undefined);
            assert.equal(request.headers['X-Title'], undefined);
            assert.equal(request.headers['x-bf-vk'], undefined);
            const body = JSON.parse(request.body);
            assert.equal(body.model, env.OPENAI_MODEL);
            assert.equal(body.messages[1].content, 'Hello {name}');
            assert.equal(body.stream, false);
            return completion();
        },
    });
    assert.equal(await translate('Hello {name}', '简体中文'), '你好 {name}');
    assert.equal(calls, 1);
});

test('thinking blocks are removed without losing the translation', async () => {
    const translate = createTranslator(env, {
        fetchImpl: async () => completion('<think>private reasoning</think>  你好 {name}  '),
    });
    assert.equal(await translate('Hello {name}', '简体中文'), '你好 {name}');
});

test('rate limits and server errors retry within a fixed limit', async () => {
    const statuses = [429, 503, 200];
    let sleeps = 0;
    const translate = createTranslator(env, {
        maxRetries: 2,
        sleep: async () => { sleeps++; },
        fetchImpl: async () => {
            const status = statuses.shift();
            return status === 200 ? completion() : new Response('unavailable', { status });
        },
    });
    assert.equal(await translate('Hello {name}', '简体中文'), '你好 {name}');
    assert.equal(sleeps, 2);
    assert.equal(statuses.length, 0);

    let calls = 0;
    const limited = createTranslator(env, {
        maxRetries: 2,
        sleep: async () => {},
        fetchImpl: async () => { calls++; return new Response('limited', { status: 429 }); },
    });
    await assert.rejects(limited('Hello', '简体中文'), /HTTP 429/);
    assert.equal(calls, 3);
});

test('authentication failures do not retry or expose error response bodies', async () => {
    let calls = 0;
    const translate = createTranslator(env, {
        fetchImpl: async () => {
            calls++;
            return new Response('private-key-canary', { status: 401 });
        },
    });
    await assert.rejects(translate('Hello', '简体中文'), { message: '翻译请求失败: HTTP 401' });
    assert.equal(calls, 1);
});

test('truncated, empty, and malformed responses are rejected', async () => {
    for (const makeResponse of [
        () => completion('partial', 'length'),
        () => completion(''),
        () => completion(null),
        () => new Response('not JSON'),
        () => new Response(JSON.stringify({ error: { message: 'private-key-canary' } })),
    ]) {
        let calls = 0;
        const translate = createTranslator(env, {
            fetchImpl: async () => { calls++; return makeResponse(); },
        });
        await assert.rejects(translate('Hello', '简体中文'), error => {
            assert.doesNotMatch(error.message, /private-key-canary/);
            return true;
        });
        assert.equal(calls, 1);
    }
});

test('connection failures have bounded retries and sanitized messages', async () => {
    let calls = 0;
    const translate = createTranslator(env, {
        maxRetries: 1,
        sleep: async () => {},
        fetchImpl: async () => { calls++; throw new Error('test-secret'); },
    });
    await assert.rejects(translate('Hello', '简体中文'), { message: '翻译接口连接失败或超时' });
    assert.equal(calls, 2);
});

function runFixture(t, fail) {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'n8n-translation-test-'));
    t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
    const scriptDir = path.join(directory, 'script');
    const languageDir = path.join(directory, 'languages');
    fs.mkdirSync(scriptDir);
    fs.mkdirSync(languageDir);
    for (const name of ['translate.js', 'openai-client.js']) {
        fs.copyFileSync(path.join(__dirname, name), path.join(scriptDir, name));
    }
    fs.writeFileSync(path.join(scriptDir, 'en.json'), JSON.stringify({ greeting: 'Old greeting' }));
    fs.writeFileSync(path.join(languageDir, 'zh-CN.json'), JSON.stringify({ greeting: '旧译文' }));
    const preload = path.join(directory, 'mock-fetch.js');
    fs.writeFileSync(preload, `globalThis.fetch = async (url, request) => {
        if (String(url).startsWith('https://raw.githubusercontent.com/')) {
            return new Response(JSON.stringify({ greeting: 'Hello {name}' }));
        }
        if (url !== 'https://gateway.example/v1/chat/completions'
            || request.headers.Authorization !== 'Bearer test-secret') {
            throw new Error('Unexpected translation request');
        }
        return ${fail ? "new Response('private-key-canary', { status: 401 })" :
            "new Response(JSON.stringify({ choices: [{ message: { content: '你好 {name}' }, finish_reason: 'stop' }] }))"};
    };`);
    const result = spawnSync(process.execPath, ['--require', preload, path.join(scriptDir, 'translate.js')], {
        cwd: directory,
        env: { ...process.env, ...env, NODE_PATH: path.join(__dirname, 'node_modules') },
        encoding: 'utf8',
        timeout: 10000,
    });
    assert.ifError(result.error);
    return {
        result,
        source: JSON.parse(fs.readFileSync(path.join(scriptDir, 'en.json'), 'utf8')),
        target: JSON.parse(fs.readFileSync(path.join(languageDir, 'zh-CN.json'), 'utf8')),
    };
}

test('CLI launched from the repository root writes only its own mirrored language paths', t => {
    const { result, source, target } = runFixture(t, false);
    assert.equal(result.status, 0, result.stderr);
    assert.equal(source.greeting, 'Hello {name}');
    assert.equal(target.greeting, '你好 {name}');
});

test('failed CLI translation exits nonzero and preserves existing language and source baseline', t => {
    const { result, source, target } = runFixture(t, true);
    assert.equal(result.status, 1, result.stderr);
    assert.equal(source.greeting, 'Old greeting');
    assert.equal(target.greeting, '旧译文');
    assert.doesNotMatch(result.stderr + result.stdout, /private-key-canary/);
});
