/*
 * @Author slashhuang
 * 静态资源服务
 */
//express框架 app.use(static('public'))绝对路径
//DRY
const path = require('path');
const fs = require('fs');
let getPath = url=>path.resolve(process.cwd(),'public',`.${url}`);
let staticFunc = (request)=>{
		let {url} = request
		return new Promise((resolve,reject)=>{
			if(url=='/'){
				url = '/index.html';
			}
			let _path=getPath(url);
			let body = fs.readFile(_path,(err,data)=>{
				if(err){
					resolve(`NOT FOUND${err.stack}`)
				}
				resolve(data)
			})	
			})
		};

module.exports = staticFunc
