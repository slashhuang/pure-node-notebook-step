

// 测试http1.1
const http = require('http');
const fs = require('fs');
//server
http.createServer((req,res)=>{
    // res.setHeader('Transfer-Encoding','chunked');
    res.writeHead(200,'ok');
    //模拟chunk encoding
    let source = fs.createReadStream('./test/tmp',{
        highWaterMark:11
    });
    source.pipe(res)
}).listen(3000)



const createClient = ()=>{
    http.get({
      hostname: 'localhost',
      port: 3000,
      path: '/',
      agent: false  // create a new agent just for this one request
    }, (res) => {
        console.log(res.rawHeaders)
        let raw = []
        res.on('data',(chunk)=>{
            console.log('chunk comes in')
            raw.push(chunk);
        }).on('end',()=>{
            console.log(Buffer.concat(raw,raw.length*11).toString('utf8'));
        })
        // console.log(res)
      // Do stuff with response
    });
}
setTimeout(createClient,5000)