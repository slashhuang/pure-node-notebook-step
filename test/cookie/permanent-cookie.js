/* 
 * 学习permanent cookie
 */

module.exports  =(request,response)=>{
	//GMT UTC
	let Expires = `Expires=${(new Date(12121414124124)).toUTCString()}`;
	let MaxAge = `Max-Age=5`;
	//优先max-age
	let sessionCookie = `userId=slashhuang;${Expires}`
	response.setHeader('Set-Cookie',sessionCookie);
	return request.headers
}