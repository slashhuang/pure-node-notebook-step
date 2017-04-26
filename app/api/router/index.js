/*
 * 创建路由模块
 * @slashhuang
 * 17/4/26
 */
class Router{
	constructor(){
		this.routerMap={
			'get':{},
			"post":{}
		}
	}
	get(pathname,handler){
		let getMap = this.routerMap.get
		getMap[pathname] = handler
	}
	post(pathname,handler){
		let postMap = this.routerMap.post
		postMap[pathname] = handler
	}
	//对接request  responsectx
	routes(ctx){
		let {pathname,method} = ctx.reqCtx;
		if(method=='get' || method=='post'){
			let handler = this.routerMap[method][pathname]
			if(handler){
				return Promise.resolve(handler(ctx))
			}else{
				return Promise.resolve()
			}
		}else{
			return Promise.resolve()
		}
	}
}
module.exports = new Router()

