
/* 
 * created by slashhuang
 * 17/3/18
 */
const http = require('http');
const PORT = 7000;
const App =require('./app');
const server = new App();
//中间件
const cookieParser = require('./app/cookie-parser');
const staticServer = require('./app/staic-server');
const apiServer = require('./app/api');
const urlParser = require('./app/url-parser');
const viewServer = require('./app/view-server');
server.use(cookieParser);
server.use(urlParser);
server.use(apiServer);
server.use(staticServer);
server.use(viewServer);


//引入mongoose
const mongoose = require('mongoose')
// Use native promises
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/blogDB')
mongoose.connection.on('error', ()=>{console.log(`error happend for db`)})
		.once('open', ()=>{console.log(`we're connected!`)})

//启动app
http.createServer(server.initServer()).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)
});



