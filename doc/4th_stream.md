
## 引入stream处理post和put请求 + 采用Promise构建流式中间件

1、 内容提要

> 在上节课讲完前端ajax的get请求和Promise重构static-server后。

> 这节课我们引入两个新功能。

- 引入stream来处理post和put请求，设计url-parser模块

- 引入Promise连接前三节课讲的static-server、api-server、url-parser中间件。



2、 课前预习资料

- [Promise复习](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- [request对象](https://github.com/nodejs/node/blob/master/doc/api/http.md#class-httpincomingmessage)

- [stream基本知识](https://github.com/nodejs/node/blob/master/doc/api/stream.md#stream_class_stream_readable)