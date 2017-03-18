第一课

------------------------npm知识overview------------------------------------

# npm_npmscript应用

###  如何全局安装一个 node 应用?

npm install -g <packagename>

### package.json 有什么作用？

> 配合npm使用，用来定义模块包，主要包括以下几点:

> 定义模块包的依赖管理[devDependencies/dependencies]、

> 定义包的基本描述信息[description、name、version等]

> 定义包的使用方式[npm scripts]

> 定义包的主程序入口模块标示[main]

> 定义包的可执行文件地址[bin]

> 定义包的bug、people、issue、license等其他信息

[npm官方对package.json的描述](https://docs.npmjs.com/files/package.json)


## npm install --save app 与 npm install --save-dev app有什么区别?

相同点:

> 都会在项目的node_modules目录下安装app

不同点:

> package.json增量写入依赖的时候，

> 分别是在dependencies和devDependencies字段下，添加app:"版本号"。

> npm install will install both "dependencies" and "devDependencies"
> npm install --production will only install "dependencies"
> npm install --dev will only install "devDependencies"

## npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做## 题目)

> npm3和npm2在安装模块的时候，策略上前者优于后者。

> npm2是纯粹的不共享包原则。

> npm3的优化点在于对于以字母序安装npm包的时候，优先安装在node_modules第一层级目录。

> 这样做的好处是如果后续包有相关依赖则不需要重复安装。


------------------------node_modules知识overview------------------------------------

## nodule_modules的查找路径是怎样的?

> 如果require('模块id'),这个模块id不是nodejs的核心模块(比如http/path等)

> 并且模块标示不以路径开始('.,../,/')

> 则nodejs会不断的在上一级目录递归查找node_modules目录

> 如果查找完所有的module.paths数组，都找不到改模块id，则抛错

[nodejs官方说明](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)



------------------------commonJS知识overview------------------------------------

CommonJS规范:

> 愿景是JS能够在任何地方运行
> 规范涵盖了模块、二进制、buffer、I/O、网关等。Node借鉴commonJS实现了一套简易的模块系统。

CommonJS模块规范:
1、模块引用
var math =require('math');
2、模块定义
exports.add = function(){
	console.log('math')
}
3、模块标示
> 小驼峰命名字符串、. 或者..路径


------------------------http模块overview------------------------------------



https://github.com/nodejs/node/blob/master/doc/api/http.md#httpcreateserverrequestlistener








