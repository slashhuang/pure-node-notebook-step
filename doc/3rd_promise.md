
## 第三课 用Promise重构异步流程


## Promise基本知识概述

- [Promise知识](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)


## 基本的Promise数据结构

> Promise的三个状态

1. pending: initial state, not fulfilled or rejected.

2. fulfilled: meaning that the operation completed successfully.

3. rejected: meaning that the operation failed.


## Promise方法

> new Promise((res,rej)=>{})

> Promise.prototype.then  => 返回一个Promise

> Promise.prototype.catch  => 返回一个Promise

> Promise.resolve(value) => value可以是thenable;也可以是

> Promise.reject(reason)

> Promise.all(iterable)

> Promise.race(iterable)