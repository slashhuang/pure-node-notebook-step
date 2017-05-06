# 部署node.js应用和Node课复习

1. ------------------------npm知识overview------------------------------------

2. - [http协议概述](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

3. --------------------------Promise知识--------------

4. ----  引入stream处理post和put请求 + 采用Promise构建流式中间件

5. ----  Buffer和构建Promise 中间件

6. ----  引入EJS中间件处理服务端渲染

7. ----  设计博客功能及路由

8. ----  cookie + session的实现

9. ----  学习mongodb

10. ----- 增加mongoose数据存储

11. ----- 增加管理后台界面

12. ----- 管理后台react架构

### 部署Node应用知识点

1. [ssh](https://en.wikipedia.org/wiki/Secure_Shell)
2. [pm2](https://github.com/Unitech/pm2)
3. 操作系统ubuntu

### 基本流程

#### 1. ssh登录远程机器

```bash

	# 生成ssh 配置文件
	touch ~/.ssh/config

	# 生成ssh公私钥==> git + 服务器
	ssh-keygen -f ali_rsa

	# 本机电脑安装ssh-copy-id
	ssh-copy-id -i ~/.ssh/ali_rsa.pub root@121.40.149.222    
	
	# 连接远程服务器
	ssh aliyun

```


#### 2. 安装基本依赖

```bash
	# 创建mongodb存储地址
	mkdir -p ~/data/db

	# 安装依赖
	apt-get install git
	apt-get install nodejs
	apt-get install mongodb
	apt install npm

```

#### 3. 安装项目依赖

```bash
	
	npm config set registry https://registry.npm.taobao.org
	npm i --verbose
	npm i pm2 -g
	pm2 start index.js 

```






