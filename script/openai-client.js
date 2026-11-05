function readConfig(env = process.env) {
    for (const name of ['OPENAI_BASE_URL', 'OPENAI_MODEL', 'OPENAI_API_KEY']) {
        if (!env[name] || !env[name].trim()) {
            throw new Error(`请设置环境变量 ${name}`);
        }
    }

    const baseUrl = env.OPENAI_BASE_URL.trim().replace(/\/+$/, '');
    let url;
    try {
        url = new URL(baseUrl);
    } catch {
        throw new Error('OPENAI_BASE_URL 必须是有效的 HTTP(S) API 基础地址');
    }
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password
        || url.search || url.hash || url.pathname.endsWith('/chat/completions')) {
        throw new Error('OPENAI_BASE_URL 必须是 HTTP(S) API 基础地址，不能包含鉴权信息、查询参数或 /chat/completions');
    }
    const concurrency = Number(env.OPENAI_API_CONCURRENT || 2);
    if (!Number.isInteger(concurrency) || concurrency <= 0) {
        throw new Error('OPENAI_API_CONCURRENT 必须是正整数');
    }

    return {
        endpoint: baseUrl + '/chat/completions',
        model: env.OPENAI_MODEL.trim(),
        apiKey: env.OPENAI_API_KEY.trim(),
        concurrency,
    };
}

function requestError(message, retryable = false) {
    const error = new Error(message);
    error.safeMessage = message;
    error.retryable = retryable;
    return error;
}

function createTranslator(env = process.env, {
    fetchImpl = globalThis.fetch,
    sleep = ms => new Promise(resolve => setTimeout(resolve, ms)),
    maxRetries = 5,
    retryDelay = 1000,
} = {}) {
    const config = readConfig(env);

    return async function doTranslate(message, language) {
        for (let attempt = 0; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetchImpl(config.endpoint, {
                    method: 'POST',
                    redirect: 'error',
                    headers: {
                        Authorization: 'Bearer ' + config.apiKey,
                        'Content-Type': 'application/json',
                    },
                    signal: AbortSignal.timeout(180000),
                    body: JSON.stringify({
                        model: config.model,
                        stream: false,
                        messages: [
                            {
                                role: 'system',
                                content: `你是 n8n 项目的翻译助手，请将英文文本翻译成 ${language}。
- 仅输出翻译后的内容，不添加说明或思考过程。
- 保留 {} 里面包裹的变量名称、代码、链接目标和格式。`,
                            },
                            { role: 'user', content: message },
                        ],
                    }),
                });

                if (!response.ok) {
                    // Do not log gateway response bodies, which may contain credentials.
                    await response.body?.cancel();
                    throw requestError(`翻译请求失败: HTTP ${response.status}`,
                        response.status === 408 || response.status === 429 || response.status >= 500);
                }

                let data;
                try {
                    data = await response.json();
                } catch {
                    throw requestError('翻译接口未返回有效 JSON');
                }
                const choice = data?.choices?.[0];
                if (choice?.finish_reason !== 'stop') {
                    throw requestError('翻译接口未完整结束响应，可能被截断或过滤');
                }
                const content = choice?.message?.content;
                if (typeof content !== 'string') {
                    throw requestError('翻译接口未返回有效的 message.content');
                }
                const translation = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
                if (!translation) {
                    throw requestError('翻译接口返回空译文');
                }
                return translation;
            } catch (error) {
                if (error.retryable === false || attempt === maxRetries) {
                    throw new Error(error.safeMessage || '翻译接口连接失败或超时');
                }
                await sleep(retryDelay);
            }
        }
    };
}

module.exports = { readConfig, createTranslator };
