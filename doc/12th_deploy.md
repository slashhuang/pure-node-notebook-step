# 部署node.js应用


### 知识点

1. ssh
2. pm2
3. 操作系统

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

```






