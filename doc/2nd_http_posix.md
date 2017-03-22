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

---------


> HTTP Messages
	- request  
		> [ method 、path 、protocal 、headers ]、body、
	- response
		> version 、statusCode 、statusMessage 、headers 、body、

	> [headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

	> [status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


-----------   Node --------

- [path模块](https://github.com/nodejs/node/blob/master/doc/api/path.md)

- [path图解](./2nd-assets/path.png)

> posix 概念:

POSIX表示可移植操作系统接口（Portable Operating System Interface of UNIX，缩写为 POSIX ），POSIX标准定义了操作系统应该为应用程序提供的接口标准，是IEEE为要在各种UNIX操作系统上运行的软件而定义的一系列API标准的总称。
为一个POSIX兼容的操作系统编写的程序，应该可以在任何其它的POSIX操作系统（即使是来自另一个厂商）上编译执行

> 理解基本的操作系统概念

(Operating System，简称OS）是管理和控制计算机硬件与软件资源的计算机程序，是直接运行在“裸机”上的最基本的系统软件，任何其他软件都必须在操作系统的支持下才能运行


- [http模块](https://github.com/nodejs/node/blob/master/doc/api/fs.md)


- header信息的头都会lowerCase
> writeHead 和 setHead的区别
> content-type


- [fs模块](https://github.com/nodejs/node/blob/master/doc/api/fs.md)

> File I/O is provided by simple wrappers around standard POSIX functions
> 文件读取

[posix文档](https://linux.die.net/man/)

> [file descriptor](http://www.sitepoint.com/accessing-the-file-system-in-node-js/)

> [wiki fd](https://en.wikipedia.org/wiki/File_descriptor)

In Unix and related computer operating systems, a file descriptor (FD, less frequently fildes) is an abstract indicator (handle) used to access a file or other input/output resource, such as a pipe or network socket. File descriptors form part of the POSIX application programming interface.











