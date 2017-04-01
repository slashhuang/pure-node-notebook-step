


const http= require('http');
const fs = require('fs');
http.createServer((req,res)=>{

    const stream = require('stream');


    let data = fs.readFileSync('./package.json','base64');
    console.log(data)
    // res.writeHead(200,'ok',{
    //     'content-type':'image/png'
    // })
    res.end(data)

}).listen(3000)



