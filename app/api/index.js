/*
 * api server
 */
let Router = require('./ajax')
module.exports=(ctx)=>{
 	let { pathname,method } = ctx.reqCtx;
 	let { resCtx,reqCtx } = ctx; 
 	let { res } = ctx;
 	return Promise.resolve({
 		then:(resolve,reject)=>{
		 	// 因为我们对method没有过滤
		 	if(pathname.match('action')){
		 		return Router.routes(ctx).then(val=>{
	 				resCtx.body = JSON.stringify(val)
	 				resCtx.headers = Object.assign(resCtx.headers,{
					 	"Content-Type":"application/json"
					})
					resolve()
	 			})
		 	}
		 	resolve()
 	}})
 }