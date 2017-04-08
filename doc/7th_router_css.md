##  第七课 规划博客路由和markdown学习


#### 第六课作业小结

> 提交网址 http://jscode.me/t/ejs-webpack2/1027

- 知识回顾

1. 理解EJS模板引擎原理

2. 构建view-parser中间件

3. 明白webpack2的配置方式


#### 第七课内容概要
------------------------------------------------

1. 设计博客功能及路由

### 页面框架

- header:   头像 + 导航：首页 + 关于 + 博客列表 + 写博客(权限控制) +  搜索
- footer:   友情链接 + github + 知乎 + 掘金 + copyright + 回到顶部
- 内容区 :见如下内容排布

### 内容排布

|-- /: 首页   博客列表 + 个人展示
|
|-- /list: 博客列表  博客分类  + 博客列表
|
|-- /write: 写博客    分两屏  markdown编辑器 +  预览区
|
|-- /about/ 关于      自由发挥
|
|-- url非法: 重定向到首页

2. markdown学习及响应式框架初步

[wiki关于markdown的说明](https://zh.wikipedia.org/zh-hans/Markdown)

[markdown中文语法说明](http://wowubuntu.com/markdown/)

## 技术选型

1. markdown转换html: [marked](https://github.com/chjj/marked)

2. code高亮: [highlight.js](https://github.com/isagalaev/highlight.js)

3. markdownParser :[css-trick社区推荐](https://css-tricks.com/choosing-right-markdown-parser/)













