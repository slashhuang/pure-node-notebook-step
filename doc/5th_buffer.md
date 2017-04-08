## 第五课   Buffer和构建Promise 中间件


#### 第四课作业小结

> 提交网址 http://jscode.me/t/promise-url-parser-post/997/3

- 知识回顾

1. 认识request和response都是stream的实例。

2. 认识如何通过stream的形式来获取客户端post的数据。

3. 认识Promise在异步处理中的使用方式，至少会使用如下三种方式。


```javascript
	// contructor + prototype.then/catch 形式
    new Promise((resolve,reject)=>{
        resolve(1)
    }).then(val=>{}).catch(val=>{})
  //Promise.resolve  参数为普通js数据类型
    Promise.resolve(1)
  //参数为thenable
    Promise.resolve({then:(res,rej)=>{
        rej(1)
    }})

```


#### 第五课内容概要
------------------------------------------------

1. 设计expres和koa的api风格,模拟`use` `callback`方法。

2. 将request和response抽象为一个引用对象。

3. Buffer讲解

第五课的代码的改造效果

```js
    // index.js
    const http = require('http');

    //中间件
    const staticServer = require('./app/staic-server');
    const apiServer = require('./app/api');
    const urlParser = require('./app/url-parser');
    const PORT = 7000;

    /*实现类似expres或者koa框架的使用方式*/
    const App =require('./app');
    const server = new App();
    server.use(urlParser);
    server.use(apiServer);
    server.use(staticServer);

    http.createServer(server.callback()).listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`)
    });

```

[整理的buffer资料](https://github.com/slashhuang/full-stack-practice/blob/master/buffer/buffer.md)

```js

    let test = `窗前明月光疑是地上霜`;
    console.log('rawdata----',Buffer.from(test))
    let data = fs.createReadStream('./tmp',{
        highWaterMark:1,
        // encoding:"utf8"
    });
    let out = []
    data.on('data',(chunk)=>{
        out.push(chunk) 
    }).on('end',()=>{
        let l = out.length;
        console.log(Buffer.concat(out,l).toString())
    })


```















