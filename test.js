


// 学习Promise

// typeof Promise == 'fuction'

// prototype ==> then/catch
// 测试用例
const assert = require('assert');

const p = Promise.resolve(1); 

const p1 = p.then(val=>{
	console.log(val); //1
	return val+1
});// resolved 2

const p2 = p1.then(val=>{
	console.log(val);
	assert.equal(val,2)
})




