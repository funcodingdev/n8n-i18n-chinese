ARG VERSION

# 基于官方 N8N 镜像构建
FROM n8nio/n8n:${VERSION}

# 设置默认语言环境为中文
ENV N8N_DEFAULT_LOCALE=zh-CN

# 覆盖官方的编辑器界面文件 (应用汉化包)
COPY --chown=node:node ./editor-ui-dist /usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist
