/* 
 * 学习httpOnly和secure cookie
 */

module.exports  =(request,response)=>{
	let MaxAge = `Max-Age=5`;
	let httpOnly = `HttpOnly`
	let secure = `Secure`
	//优先max-age
	let sessionCookie = [
		`userId=slashhuang`,
		MaxAge,
		httpOnly,
		// http ==> https
		//在非https或者SSL协议下，导致cookie不再生效
		// secure
	].join(';')
	response.setHeader('Set-Cookie',sessionCookie);
	return request.headers
}