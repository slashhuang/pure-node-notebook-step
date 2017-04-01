//The Buffer class was introduced as part of the Node.js API
//to make it possible to interact with octet streams
//in the context of things like TCP streams and file system operations.



//the JavaScript language had no mechanism
//for reading or manipulating streams of binary data
//Uint8Array==> 8-bit unsigned integers


// const fs = require('fs');
const assert = require('assert');
// 断言 
// Buffer方法
//----学习Buffer.from()------- Buffer.from参数及数据转换

//1. (string,encoding)
// const encodingTest = 'hello world'
// //[0x68,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64]
// let buf1 = Buffer.from(encodingTest,'utf8');
// console.log(buf1)
// //1. (buffer)
// let buf2 = Buffer.from([0x68,0x65,0x6c,0x6c,0x6f,0x20,0x77,0x6f,0x72,0x6c,0x64])

// console.log(buf2.toString())
// assert.equal(buf2.toString(),encodingTest)

// // buffer转码问题之-----------汉子转码问题
// //汉字需要三位buffer来标示.
// let test = `窗`;// [0xe7 ,0xaa ,0x97]
// console.log(Buffer.from(test))

// //----------- Buffer.concat参数及数据转换
// // 1. 将buffer数组，组合成新的buffer.
// // 使用方式: Buffer.concat(list[, totalLength])
// let test = `窗`;// [0xe7 ,0xaa ,0x97]
// let buf3 =Buffer.from([0xe7]);
// let buf4 =Buffer.from([0xaa]);
// let buf5 =Buffer.from([0x97]);
// //concat的作用是讲buffer拼接成大的buffer
// console.log(Buffer.concat([buf3,buf4,buf5],3).toString('utf8'))


//-----------  Buffer应用场景
/*1、stream读取字节丢失问题，不过Node已经帮你做了兼容*/
const fs = require('fs');
let data = fs.createReadStream('./test/tmp',{
    highWaterMark:1,
    // encoding:"utf8"
});
let out = [];
data.on('data',(chunk)=>{
	out.push(chunk)
}).on('end',()=>{
    console.log(Buffer.concat(out).toString())
});


