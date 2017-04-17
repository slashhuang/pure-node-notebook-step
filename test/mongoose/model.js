/*
 * 学习mongoose model
 * http://mongoosejs.com/docs/models.html
 */

 const mongoose = require('mongoose')
 const moment = require('moment')
 const blogSchema = require('./schema')['blogSchema']
 require('./_index')
 /*
  * Creating a model
  * 将schema塞入model
  */

 const Blog = mongoose.model('Blog', blogSchema)
 var blog = new Blog({
 	  title:  'gulp学习指南',
	  author: 'slashhuang',
	  body:   'hello world',
	  comments: [{ body: '真不错', date:moment().toDate()}],
	  // date:  moment().toDate(),
	  hidden: false,
	  meta: {
	    votes: 111,
	    favs:  12
	  }
 });
 blog.save((err,blog)=>{
 	console.log(err)
 })
 /*实例方法*/
  blog.$findAll((err,list)=>{
    console.log('findall',list)
  })
  /*静态方法*/
  Blog.findByName('gulp学习指南',(err,list)=>{
    console.log('findByName',list)
  })
   /*加上query*/
 Blog.find().byName('fu').exec(function(err, list) {
  console.log(list);
});

