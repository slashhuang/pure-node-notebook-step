/* 
 * 学习sesssion cookie
 */

//在chrome里面，必须将浏览器完全关闭session cookie才生效 
module.exports  =(request,response)=>{
	let sessionCookie = `userId=node;`
	response.setHeader('Set-Cookie',sessionCookie);
	return request.headers
}