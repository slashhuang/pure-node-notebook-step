/*
 * 创建schema
 * @Author slashhuang
 * 17/4/26
 */

const {Schema} = require('mongoose');

//创建博客的数据存储 schema
exports.blogSchema = new Schema({
  title:  String,
  content:   String, //html
  rawContent:String, //markdown
  category:String,//分类
  date: { type: String, default: ()=>{
  	return new Date().toLocaleString()
  }}	
});

//创建博客分类
exports.categorySchema = new Schema({
  category:  String,
});
