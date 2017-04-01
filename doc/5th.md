## 抽象逻辑，形成Promise链条

1. 将request和response抽象为一个引用对象。

2. 设计expres和koa的api风格,模拟`use` `callback`方法。

第五课的实现效果

```js
    const http = require('http');
    const staticServer = require('./app/staic-server');
    const apiServer = require('./app/api');
    const urlParser = require('./app/url-parser');
    const PORT = 7000;

    //实现类似expres或者koa框架的使用方式
    const App =require('./app');
    const server = new App();
    server.use(urlParser);
    server.use(apiServer);
    server.use(staticServer);

    http.createServer(server.callback()).listen(PORT,()=>{
        console.log(`server listening on port ${PORT}`)
    });

```

