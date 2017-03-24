
## 第三课 用Promise重构异步流程


--------------------------Promise知识--------------

- [Promise知识](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

1. Promise的状态

- pending
- rejected
- fulfilled

2. prototype原型方法和静态方法

> new Promise((res,rej)=>{})

- Promise.prototype.then

- Promise.prototype.catch

- Promise.resolve

- Promise.reject

- Promise.all

- Promise.race

3. Promise的作用

- 状态存储

- 异步处理

- 链式调用

-----------------------node的url/querystring模块---------------
> 处理客户端url

[url模块](https://github.com/nodejs/node/blob/master/doc/api/url.md)

- [url模块图解](./3rd-assets/url.png)


> 处理客户端query参数

[querystring模块](https://github.com/nodejs/node/blob/master/doc/api/querystring.md)

```javascript
	querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
	// returns 'foo=bar&baz=qux&baz=quux&corge='

	querystring.parse('foo=bar&abc=xyz&abc=123')
	// returns {
	  foo: 'bar',
	  abc: ['xyz', '123']
	}
```
















