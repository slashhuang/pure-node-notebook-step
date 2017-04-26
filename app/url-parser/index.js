/*
 * url-parser
 * 处理客户端数据
 */


 // request: query + body + method

const Url = require('url')

module.exports = (ctx)=>{
	//原型链readable stream eventEmitter
	let { method,url } = ctx.req;
	let { reqCtx } = ctx;
	/* reqCtx
	query 对象
	pathname路径名
	index.html?a=1 ==> query:{a:1}
	*/
	method = method.toLowerCase();
	Object.assign(reqCtx,Url.parse(url,true),{method})

	return Promise.resolve({
		then:(resolve,reject)=>{
			if(method == 'post'){
				let data = [];
		 		//paused flow 
		 		//paused ===> flow
		 		ctx.req.on('data',(chunk)=>{
			 		data.push(chunk);
			 	}).on('end',()=>{
			 		let endData = Buffer.concat(data).toString();
			 		reqCtx.body = JSON.parse(endData);
			 		//通知下一个流程
			 		resolve()
			 	});
			}else{
				resolve()
			}
		}
	})	 		
} 
