/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./staic-server');
const apiServer = require('./api');
const urlParser = require('./url-parser');
class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		return (request,response)=>{
			let { url,method } = request; //==> 解构赋值 let url = request.url
			// 所有以action结尾的url，认为它是ajax
			// DRY
			//返回的字符串或者buffer
			request.context = {
				body:'',
				query:{},
				method:'get'
			};
			urlParser(request).then(()=>{
				return apiServer(request)
			}).then(val=>{
				if(!val){
					//Promise
					return staticServer(request)
				}else{
					return val
				}
			}).then(val=>{
				//数组
				let base ={'X-powered-by':'Node.js'};
				let body = '';
				//
				if(val instanceof Buffer){
					body = val;
				}else{
					body = JSON.stringify(val);
					let fianlHeader = Object.assign(base,{
						'Content-Type':'application/json'
					});
					response.writeHead(200,'resolve ok',fianlHeader)
				}
				response.end(body)	
			})
		}
	}
}

module.exports =  App