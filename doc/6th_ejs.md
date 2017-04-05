## 第六课   引入EJS模板引擎


#### 第五课作业小结

> 提交网址 http://jscode.me/t/buffer-promise/1005/3

- 知识回顾

1. 重构Node.js端的Promise风格代码

2. 认识如何设计数据模型来描述request,response。

3. 认识Buffer的使用，`Buffer.from()`,`Buffer.concat()`等


```javascript
    //字符串转Buffer
   let buf1 = Buffer.from('hello wolrd');
   // buffer数组合并成大的buffer
   Buffer.concat([buf1])

```
## 第六课预习

[ejs模板引擎文档](https://github.com/mde/ejs)
[webpack2文档](https://webpack.js.org/concepts/)

#### 第六课内容概要
------------------------------------------------

1. 引入EJS中间件处理服务端渲染

2. 引入webpack2构建前端代码


第五课的代码的改造效果

```js
    // index.js
    const http = require('http');

    //中间件
    const staticServer = require('./app/staic-server');
    const apiServer = require('./app/api');
    const urlParser = require('./app/url-parser');
    const viewServer = require('./app/view-server');
    const PORT = 7000;

    /*实现类似expres或者koa框架的使用方式*/
    const App =require('./app');
    const server = new App();
    server.use(urlParser);
    server.use(apiServer);
    server.use(viewServer);
    server.use(staticServer);

    http.createServer(server.callback()).listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`)
    });

```
















