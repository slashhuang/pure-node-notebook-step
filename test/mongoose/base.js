/*
 * 熟悉mongoose
 * http://mongoosejs.com/docs/index.html
 */
const mongoose = require('mongoose');
//设置数据schema
const kittySchema = mongoose.Schema({ name: String });
//扩展schema方法
kittySchema.methods.speak = function () {
  console.log(this.name);
};

//生成mongoose数据模型管理
var Kitten = mongoose.model('Kitten', kittySchema);
//实例化
var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
//----------------- 实战 ---------------
//save   =保存到document
fluffy.save((err, fluffy)=>{
  if (err) return console.error(err);
  fluffy.speak();
});
//find   =查找所有数据
Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log('----find',kittens);
})
//find  加上query条件
Kitten.find({ name: /^fluff/ }, (err, kittens)=>{
  if (err) return console.error(err);
  console.log('----find query',kittens);
})







