/*
 * 采用mongoose来处理ajax
 * @Author slashhuang
 */

let Router = require('./router')

let { $_saveBlog,$_saveCategory } = require('./mongo')
//获取分类列表
Router.get('/categoryList.action',ctx=>{
	
})
//增加分类
Router.get('/category.action',ctx=>{
	let category = ctx.reqCtx.query
	return $_saveCategory(category)
})
//添加博客
Router.post('/blog.action',ctx=>{
	let blog = ctx.reqCtx.body
	return $_saveBlog(blog)
})

module.exports = Router;