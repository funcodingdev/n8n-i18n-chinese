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

## 参考资源

- [n8n 官方文档](https://docs.n8n.io/)
- [原仓库地址](https://github.com/other-blowsnow/n8n-i18n-chinese)
