:book: docker learning...

## express

构建镜像

```bash
docker build -f express/Dockerfile -t my-express .
```

启动容器

```bash 
cd express
docker-compose up -d
``` 

> Dockerfile 中的 COPY 路径是相对于 build 命令的 PATH 参数
