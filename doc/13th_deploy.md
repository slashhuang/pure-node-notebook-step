# 部署node.js应用和Node课复习

1. ------------------------npm知识overview------------------------------------

node package manager ==> 

package.json ==> json文件 版本号管理 semantic version

main/bin

2. - [http协议概述](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

- request + response 

3. --------------------------Promise知识--------------
- new Promise(resolve=>resolve(1)).then(val=>val+1)
- state pending + resolved + rejected
- prototype ==> then catch
- static ==> resolve , reject ,all, race

4. ----  引入stream处理post和put请求 + 采用Promise构建流式中间件

http.createServer((req,res)=>{res.end('1')}).listen(3000)
处理报文

curl -d 'hello=world' localhost:3000
//body
request.on('data',chunk=>{
	s.push(chunk)
}).on('end':()=>{
	客户端的post请求数据//Buffer.concat(s).toString()
})

5. ----  Buffer和构建Promise 中间件

- res.end(1) //出错 fs.readFileSync(png) ==> Buffer

- Buffer.concat() buffer.toString(2)

6. ----  引入EJS中间件处理服务端渲染

- EJS ==> 如何去实现模板引擎 字符串==> new Function()
- directive<% %>control flow <% if(true)%> <% console.log(1)%>
- escape variable <%- %> xss 过滤 <%= %>


7. ----  设计博客功能及路由

8. ----  cookie + session的实现

- set-cookie : key=value;httpOnly;Max-Age='10000';Expires=<UTC时间>
- session ==> 会话

9. ----  学习mongodb

- nosql ==> key/value
- mysql ==> 二维表来表明关系 table

- database ==> collections ==> documents ==> 数据字段
- database ==> tables ==> field ==> 数据

- mongod ==> mongo dameon;  mongo ==> shell client
- CRUD ==> create  + replace + update + delete 

10. ----- 增加mongoose数据存储

js==> promise风格去构建了mongodb的CRUD

schema （shape） + model  (document)
var new schema({name:string,content:string})
model(schema)

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

	dockert开一节公开课

```






