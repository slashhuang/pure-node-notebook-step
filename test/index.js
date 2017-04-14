



// require('./buffer')
// require('./http')

// require('./ejs')

const http = require('http');
const PORT = 7000;

//启动app
http.createServer((req,res)=>{
	let chunker = [];
	req.on('data',chunk=>{
		chunker.push(chunk)
	}).on('end',()=>{
		res.end(Buffer.concat(chunker).toString('utf8'));
	})

}).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)
});