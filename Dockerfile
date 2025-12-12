ARG VERSION

# 基于官方 N8N 镜像构建
FROM n8nio/n8n:${VERSION}

# 1. 切换到 root 用户以执行安装命令
USER root

# 2. 安装 Python 3 (修复 Task Runner 启动报错)
# --no-cache 表示不缓存安装包，减小镜像体积
RUN apk add --update --no-cache python3

# 3. 切回 node 用户 (N8N 默认运行用户) 以确保安全
USER node

# 设置默认语言环境为中文
ENV N8N_DEFAULT_LOCALE=zh-CN

# 覆盖官方的编辑器界面文件 (应用汉化包)
COPY ./editor-ui-dist /usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist
