/* 
 * 学习permanent cookie
 */

module.exports  =(request,response)=>{
	let Expires = `Expires=${(new Date(12121414124124)).toUTCString()}`;
	let MaxAge = `Max-Age=2`;
	//优先max-age
	let sessionCookie = `userId=slashhuang;${MaxAge};${Expires}`
	response.setHeader('Set-Cookie',sessionCookie);
	return request.headers
}