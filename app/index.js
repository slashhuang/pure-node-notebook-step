/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./staic-server');
const apiServer = require('./api');
class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		return (request,response)=>{
			let { url } = request; //==> 解构赋值 let url = request.url
			// 所有以action结尾的url，认为它是ajax
			// DRY
			//返回的字符串或者buffer	

			//课后作业，如何把	apiServer和staticServer链接起来

			/* 
			 * 1、把代码变成Promise
			 * 选做1 讲逻辑重构成Promise chain
			 * 2、apiServer.then(()=>{
				staticServer()
			 })
			 * 选做2
			 * 3、自己实践Promise的其他东西
			 DRP
			 */

			let body = '';
			let headers = {};
			if(url.match('action')){
				apiServer(url).then(val=>{
					body = JSON.stringify(val);
					headers = {
						'Content-Type':'application/json'
					};
					let fianlHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
					response.writeHead(200,'resolve ok',fianlHeader)
					response.end(body)	
				})	
			}else{
				//每个请求逻辑 根据url 进行代码分发
				//居然用同步来处理
				staticServer(url).then((body)=>{
					let fianlHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
					response.writeHead(200,'resolve ok',fianlHeader)
					response.end(body)	
				});
			}

		}
	}
}

module.exports =  App