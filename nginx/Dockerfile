FROM nginx

RUN mkdir /app
WORKDIR /app
COPY public/ /app/public/
# 用本地的 default.conf 配置来替换 nginx 镜像里的默认配置
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443