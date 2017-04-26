# pure-node-notebook-step

## 前言

本项目是从零到一打造个人博客系统的项目，不依赖任何第三方框架，手写Node.js处理中间件。

博客的前端项目在[pure-node-notebook-fe](https://github.com/slashhuang/pure-node-notebook-fe)

Node项目和前端项目通过`git submodule`进行管理。

您可以通过`git checkout 分支`来学习不同阶段的node代码。

**项目架构**

```bash

	|- app  node中间件及服务
	|	|
	|	|- 技术选型   promise + ejs(模板引擎)
	|
	|
	|- public  前端submodule
	|	|
	|	|- 技术选型   ant-design + react项目
	|
	|
	|- db.sh   运行mongodb
	|	|
	|	|- 技术选型   mongoose
	|
	|- index.js  程序启动入口

```


**运行项目**

```bash

	git clone git@github.com:slashhuang/pure-node-notebook-step.git

	# start mongodb
	sh ./db.sh

	# start node.js code
	npm install --verbose
	npm start

	# init submodule
	git submodule init

	#  start front-end code
	cd public
	npm install --verbose
	npm start

```

**小贴士**

如果submodule安装不成功，请换用http协议
`修改.gitmodules文件为http协议`，如果还有疑问请联系作者slashhuang


## 第一课 项目初始化http服务

npm、package.json、node_modules及项目架构初始化

```bash
	git clone git@github.com:slashhuang/pure-node-notebook-step.git
	git checkout lesson1
	npm install
	npm start
```

## 第二课 创建静态资源服务器

http协议、fs、path模块及创建项目静态服务器

```bash
	git checkout lesson2
	npm install
	npm start
```

## 第三课 引入对接前端ajax的api服务体系

引入Promise/url架构项目

引入对接前端ajax的api服务体系

```bash
	git checkout lesson3
	npm install
	npm start
```

## 第四课 引入stream和Promise

引入Promise来连接static-server api-server

引入Promise/url/querystring架构项目

抽象request数据的context模型中间件url-parser

```bash
	git checkout lesson4
	npm install
	npm start
```

## 第五课 设计框架API及Promise中间件逻辑

1. 设计expres和koa的api风格,模拟`use` `callback`方法。

2. 将request和response抽象为一个引用对象。

3. Buffer讲解

```bash
	git checkout lesson5
	npm install
	npm start
```

## 第六课 引入EJS模板引擎

1. 引入EJS中间件处理服务端渲染

2. 引入webpack2构建前端代码

```bash
	git checkout lesson6
	npm install
	npm start
```

## 第七课  实现Node动态路由/重定向/页面模块划分

1. 实现Node动态路由/重定向/页面模块划分

2. 页面框架

- header:   头像 + 导航：首页 + 关于 + 博客列表 + 写博客(权限控制) +  搜索
- footer:   友情链接 + github + 知乎 + 掘金 + copyright + 回到顶部
- 内容区 :见如下内容排布

3. 内容排布

|-- /: 首页   博客列表 + 个人展示

|-- /list: 博客列表  博客分类  + 博客列表

|-- /write: 写博客    分两屏  markdown编辑器 +  预览区

|-- /about/ 关于      自由发挥

|-- url非法: 重定向到首页


```bash
	git checkout lesson7
	npm install
	npm start
```

## 第八课 采用cookie实现用户授信

1. 学习cookie来实现简化版的登录登出

2. 介绍responsive css基础

```bash
	git checkout lesson8
	npm install
	npm start
```


## 第九课 引入mongodb准备数据库存储

1. 学习关系型和非关系型数据库

2. 学习mongodb基本知识

[参考mongo-panda项目](https://github.com/slashhuang/mongo-panda)

```bash
	git checkout lesson9
	npm install
	npm start
```



















