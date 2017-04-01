/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
class App {
	constructor(){
		this.middlewareArr = [];
		//设计一个空的Promise
		this.middlewareChain = Promise.resolve();
	}
	use(middleware){
		this.middlewareArr.push(middleware);
	}
	//创建Promise链条
	composeMiddleware(context){
		let { middlewareArr }= this
		//根据中间件数组 创建Promise链条
		for(let middleware of middlewareArr){
			this.middlewareChain = this.middlewareChain.then(()=>{
				return middleware(context)
			})
		}
		return this.middlewareChain
	}
	initServer(){
		//初始化的工作
		return (request,response)=>{
			let { url,method } = request; //==> 解构赋值 let url = request.url
			// 所有以action结尾的url，认为它是ajax
			// DRY
			//返回的字符串或者buffer
			let context = {
				req:request,
				reqCtx:{
					body:'',//post请求的数据
					query:{},//处理客户端get请求
				},
				res:response,
				resCtx:{
					headers:{},//response的返回报文
					body:'',//返回给前端的内容区
				}
			};
			//request + response
 			//Promise.resolve(参数) ==> 通过context对象来传递

 			// 1、 每一块中间件只需要关注修改context对象即可，彼此独立
 			// 2、 设计了use和composeMiddleware这两个api用来创建Promise链
 			// 3、 开发者可以专注于中间件开发

 			// 函数体可以百年不变
 			this.composeMiddleware(context)
 				.then(()=>{
					//数组
					//setHeader(key,value)
					let { body,headers } = context.resCtx; 
					let base ={'X-powered-by':'Node.js'};
					response.writeHead(200,'resolve ok',Object.assign(base,headers));
					response.end(body)	
				})

		}
	}
}

module.exports =  App