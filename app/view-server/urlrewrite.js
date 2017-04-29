/*
 * 网站路由
 */


// ### 内容排布

// |-- /: 首页   博客列表 + 个人展示
// |
// |-- /list: 博客列表  博客分类  + 博客列表
// |
// |-- /manage: 管理博客    分两屏  markdown编辑器 +  预览区
// |
// |-- /about/ 关于      自由发挥
// |
// |-- url非法: 重定向到首页
const urlrewriteMap = {
	'/':'index',
	'/list':"list",
	'/manage':'manage',
	'/about':'about',
	'/blog':'detail'
};
module.exports=urlrewriteMap
