/*
 * 采用mongoose来处理ajax
 * @Author slashhuang
 */

let Router = require('./router')

let { 
	$_saveBlog,
	$_saveCategory,
	$_getCategoryList,
	$_getBlogDetail,
	$_getBlogList,
	$_deleteBlog  } = require('./mongo')
//获取分类列表
Router.get('/categoryList.action',ctx=>{
	return $_getCategoryList()
})
//增加分类
Router.post('/category.action',ctx=>{
	let category = ctx.reqCtx.body
	return $_saveCategory(category)
})
//添加博客
Router.post('/blog.action',ctx=>{
	let blog = ctx.reqCtx.body
	return $_saveBlog(blog)
})
//博客详情页面
Router.get('/blogDetail.action',ctx=>{
	let { query } = ctx.reqCtx
	return $_getBlogDetail(query)
})
//获取博客列表
Router.get('/blogList.action',ctx=>{
	let { query } = ctx.reqCtx
	return $_getBlogList(query)
})
//删除博客
Router.post('/deleteBlog.action',ctx=>{
	let { body } = ctx.reqCtx
	return $_deleteBlog(body) 
})

module.exports = Router;













