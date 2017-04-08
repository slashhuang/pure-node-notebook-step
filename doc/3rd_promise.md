
## 第三课 用Promise重构异步流程

## 第二课作业小结

> 提交网址 http://jscode.me/t/html-css-js/848/26

> 郭琪琛 ==> 已在项目中尝试用Promise处理[](https://github.com/GuoQichen/pure-node-notebook/blob/master/app/static-server/index.js)


async await  ===> Promise



课件流程
1. 增加对前端ajax的get请求服务



//2. 采用url/querystring模块，抽象Url解析模块 [忽略]


3. 由异步出现的问题引出异步处理神器 =>Promise
4. Promise讲解
5. 采用Promise串行static-server/ajax服务/url解析模块




--------------------------Promise知识--------------

- [Promise知识](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

1. Promise的状态

- pending
- rejected
- fulfilled

2. prototype原型方法和静态方法

> new Promise((res,rej)=>{})

- Promise.prototype.then

==> return 新的Promise

- Promise.prototype.catch

==> return 新的Promise



- Promise.resolve

- Promise.reject

- Promise.all

- Promise.race

3. Promise的作用

- 状态存储

- 异步处理

- 链式调用



