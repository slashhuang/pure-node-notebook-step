/* 
 * 学习cookie知识
 */

const http = require('http');
const sessionCookie = require('./session-cookie');
const permanentCookie = require('./permanent-cookie');
const httpCookie = require('./secure_httpOnly-cookie');
http.createServer((req,res)=>{
	let cookieObj = httpCookie(req,res);
    res.writeHead(200,'ok');   
    res.end(JSON.stringify(cookieObj))
}).listen(3000)