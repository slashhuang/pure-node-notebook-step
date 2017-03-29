/*
 * api server
 */


 module.exports=(request)=>{
 	let { url,method,context } = request; //==> 解构赋值 let url = request.url
 	
// request.context = {
// 				body:'',
// 				query:{},
// 				method:'get'
// 			};
 	let apiMap={
		'/list.action':['吉他','三只松鼠','mongodb'],
		'/user.action':['slash','男性','中国人']
 	};
 	method = method.toLowerCase();
 	// 因为我们对method没有过滤
 	if(method == 'get'){ //localhost:7000?a=1&b=2
 		return Promise.resolve(apiMap[url])
 	}else{
 		let {body} = context;
 		//处理post B post  ==socket==  S
 		return Promise.resolve(body)
 	}
 }