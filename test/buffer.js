


const http= require('http');
const fs = require('fs');

// Buffer学习
/*1、汉子转码问题*/
let test = `窗`;
console.log('rawdata----',Buffer.from([0xe7 ,0xaa ,0x97]).toString())


/*1、stream读取问题*/
let data = fs.createReadStream('./test/tmp',{
    highWaterMark:1,
    // encoding:"utf8"
});
let out = []
data.on('data',(chunk)=>{
    out.push(chunk)
}).on('end',()=>{
    let l = out.length;
    console.log(Buffer.concat(out,l).toString())
});


