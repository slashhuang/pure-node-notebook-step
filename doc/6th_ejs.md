## 第六课   引入EJS模板引擎

#### 第五课作业小结

> 提交网址 http://jscode.me/t/buffer-promise/1005/3

- 知识回顾

1. 重构Node.js端的Promise风格代码

2. 认识如何设计数据模型来描述request,response。


#### 第六课内容概要
------------------------------------------------

1. 引入EJS中间件处理服务端渲染

2. 引入webpack2构建前端代码

[ejs模板引擎文档](https://github.com/mde/ejs)
[webpack2文档](https://webpack.js.org/concepts/)

[ejs基本架构参考full-stack-practice](https://github.com/slashhuang/full-stack-practice/blob/master/view-engine/ejs.md)


第六课的代码的改造效果

```js
    // view-server
    let ejs= require('ejs');
    let renderFn = ejs.compile(input, {
        compileDebug:true,
        _with:false,
        filename:path.resolve(__filename), //所有include的路径相对这个路径
        localsName:'$'
    });
    renderFn({
        hello:'world'
    })

```
















