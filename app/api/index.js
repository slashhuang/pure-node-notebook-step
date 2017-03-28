/*
 * api server
 */


 module.exports=(url)=>{
 	
 	let apiMap={
		'/list.action':['吉他','三只松鼠','mongodb'],
		'/user.action':['slash','男性','中国人']
 	}
 	return Promise.resolve(apiMap[url])
 }