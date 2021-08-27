:book: docker learning...

## 构建镜像

到对应目录利用 `docker build` 构建， 比如构建 `express`

```bash
docker build -f express/Dockerfile -t my-express .
```

> Dockerfile 中的 COPY 路径是相对于 build 命令的 PATH 参数

## 启动容器

到对应目录下用 `docker-compose` 启动， 比如启动 `nginx` 服务

```bash 
cd nginx && docker-compose up -d
``` 

## 连接mongo

在启动 `mongo` 服务后， 利用 Node 进行连接： 

```js
const { MongoClient } = require('mongodb')

const uri = 'mongodb://root:123456@localhost:27017'
const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()

    console.log('connect mongo server successful')

    const database = client.db('nblog')
    const posts = database.collection('posts')

    const result = await posts.find()

    console.log(await result.count())
    await result.forEach(console.log)
  } finally {
    client.close()
  }
}

run().catch(console.dir)
```