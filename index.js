
/* 
 * created by slashhuang
 * 17/3/18
 */
const http = require('http');
const PORT = 7000;
const App =require('./app');
const server = new App();
//中间件
const staticServer = require('./app/staic-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser');
server.use(urlParser);
server.use(apiServer);
server.use(staticServer);

//启动app
http.createServer(server.initServer()).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)
});



