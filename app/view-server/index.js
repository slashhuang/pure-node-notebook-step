/*
 * view-server
 * @Author slashhuang
 */
// ejs动态渲染
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const urlrewriteMap = require('./urlrewrite');
//路由 routes  ==>  controller ==> 结果 MVC
module.exports = (ctx)=>{
	let { reqCtx,resCtx } = ctx;
	let { pathname } = reqCtx;
	return Promise.resolve({
		then:(resolve,reject)=>{
			if(pathname.match('action') || pathname.match(/\./)){
				resolve()
			}else{
				const viewPath = path.resolve(__dirname,'ejs'); 
				let ejsName = urlrewriteMap[pathname];
				if(ejsName){
					let layoutPath=path.resolve(viewPath,'layout.ejs');					
					let layoutHtml = fs.readFileSync(layoutPath,'utf8');
					// new Function
					let render = ejs.compile(layoutHtml,{
						compileDebug:true,
						filename:layoutPath
					});

					let html = render({
						viewName:ejsName,
						hasUser:resCtx.hasUser
					})

					resCtx.headers = Object.assign(resCtx.headers,{
						'Content-Type':'text/html'
					});
					resCtx.body = html;
					resolve()
				}else{
					//重定向的功能
					resCtx.headers = Object.assign(resCtx.headers,{
						'Location':'/'
					});
					resCtx.statusCode = 302;
					resCtx.statusMessage = 'redirect';
					resCtx.body = '';
					resolve()
				}
			}
			
			
			// if(urlMap[url]){
				
			// 	let htmlPath=path.resolve(viewPath,viewName);
			// 	resCtx.headers = Object.assign(resCtx.headers,{
			// 		'Content-Type':mime.lookup(htmlPath)
			// 	});
			// 	let tempStr = fs.readFileSync(htmlPath,'utf8');
			// 	let render = ejs.compile(tempStr,{
			// 		compileDebug:true
			// 	});
			// 	resCtx.body  = render({hello:'world'});
			// 	resolve()
			// }else{
			// 	resolve()
			// }
		}
	})

}

