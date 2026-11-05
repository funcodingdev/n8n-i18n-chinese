# n8n 中文版 (官方版本发布版本 + 企业版功能)

> 本仓库 fork 自 [other-blowsnow/n8n-i18n-chinese](https://github.com/other-blowsnow/n8n-i18n-chinese)，感谢原作者的贡献！

## 与原仓库的区别

- **版本更新**：本仓库跟踪 n8n 的**官方最新发布版本**，包含最新功能和改进
- **企业版功能**：打包的 Docker 镜像额外支持了**企业版功能解锁**，无需许可证即可使用所有企业特性
- **两种镜像**：
    - `funcodingdev/n8n-chinese`: 中文版镜像（不含企业版功能）
    - `funcodingdev/n8n-mock`: 企业版镜像（不含中文汉化）
    - `funcodingdev/n8n-chinese-mock`: 中文版 + 企业版功能镜像

## 快速开始

### 中文版镜像（不含企业版功能）

```shell
docker run -it --rm --name n8n-chinese \
-p 15678:5678 \
-v ~/.n8n:/home/node/.n8n \
-e N8N_SECURE_COOKIE=false \
funcodingdev/n8n-chinese
```

### 企业版镜像（不含中文汉化）

```shell
docker run -it --rm --name n8n-mock \
-p 15678:5678 \
-v ~/.n8n:/home/node/.n8n \
-e N8N_SECURE_COOKIE=false \
funcodingdev/n8n-mock
```

### 中文版 + 企业版功能镜像（推荐）

```shell
docker run -it --rm --name n8n-chinese-mock \
-p 15678:5678 \
-v ~/.n8n:/home/node/.n8n \
-e N8N_SECURE_COOKIE=false \
funcodingdev/n8n-chinese-mock
```

## 企业版功能说明

使用 `funcodingdev/n8n-mock` 和 `funcodingdev/n8n-chinese-mock` 镜像可以解锁以下企业版功能：

- 高级权限管理
- LDAP/SAML 单点登录
- 源代码控制集成
- 工作流历史记录
- 日志流式传输
- 多主节点支持
- 外部密钥管理
- AI 助手功能
- 以及所有其他企业版特性

## 翻译接口配置

翻译脚本使用标准 OpenAI Chat Completions 格式，可以连接自定义中转站。接口地址、模型和密钥通过环境变量配置，不依赖特定网关。

### GitHub Actions

在 **Settings → Environments → test** 中配置：

| 类型 | 名称 | 示例或说明 |
| --- | --- | --- |
| Environment variable | `OPENAI_BASE_URL` | `https://api.flowist.dev/v1` |
| Environment variable | `OPENAI_MODEL` | `sub2apigpt/gpt-6.1-sol`，以网关可用模型为准 |
| Environment secret | `OPENAI_API_KEY` | 中转站密钥，通过 `Authorization: Bearer` 发送 |
| Environment variable，可选 | `OPENAI_API_CONCURRENT` | 并发请求数，默认 `2`，必须是正整数 |

**打包编辑器界面语言包**工作流已绑定 `test` 环境。它使用上述配置增量翻译新增或变更的字符串，并沿用现有的提交、构建和发布流程。该流程每小时检查一次，也可以在 **Actions** 中手动运行；最新 n8n 版本的标签已经存在时，会跳过翻译和打包。

### 本地运行

需要 Node.js 22 或更高版本，以及 `script/package.json` 中指定版本的 pnpm。在仓库根目录执行：

```sh
cp .env.example .env
```

编辑根目录 `.env`，填写你的地址、模型和密钥，再运行：

```sh
cd script
pnpm install --frozen-lockfile
pnpm test
pnpm run translate
```

`.env` 和 `node_modules/` 已被 Git 忽略。脚本只在你指定的 API 基础地址后追加 `/chat/completions`，不会自动添加或删除 `/v1`。模型名称会原样发送，保留网关要求的供应商前缀。根目录或 `script/` 目录启动脚本均会读取根目录的 `.env`，并将结果写回本仓库的 `languages/` 和 `script/en.json`。

接口测试使用模拟响应，不调用真实模型。翻译请求超时为三分钟；网络错误、限流和服务端错误最多重试五次，鉴权失败或无效响应会直接报错。任一字符串翻译失败时，任务返回非零退出码，不更新语言文件或英文基线，避免失败结果被提交发布。脚本不会将中转站错误响应正文写入日志。

## 参考资源

- [n8n 官方文档](https://docs.n8n.io/)
- [原仓库地址](https://github.com/other-blowsnow/n8n-i18n-chinese)
