## 第二课 创建简单的静态资源服务器


###  知识点


- [http协议概述](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

> simple 容易阅读

> extensible 通过headers语义沟通客户端和服务端

> stateless but not sessionless

> http连接
	- http 1.0 open tcp for each request/response
	- http 1.1 introduced piplining ==> 复用tcp 连接
	- http 2   单连接多信道 更加efficient

> http flow
	- Open a TCP connection
	- Send an HTTP message
	- Read the response sent by the server

> HTTP Messages
	- request
		> method 、path 、protocal 、headers 、body、
	- response
		> version 、statusCode 、statusMessage 、headers 、body、

	> [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

	> [status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


- [path模块](https://github.com/nodejs/node/blob/master/doc/api/path.md)

> posix 概念

> 理解操作原理


- [fs模块](https://github.com/nodejs/node/blob/master/doc/api/fs.md)

> 文件读取

> [file descriptor](http://www.sitepoint.com/accessing-the-file-system-in-node-js/)

- [Promise知识](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

> new Promise((res,rej)=>{})

> Promise.resolve()

> Promise.all

> Promise.race










