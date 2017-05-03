# 管理后台react架构

**项目架构**

```bash

    |- build  webpack配置文件
    |   |
    |   |- 技术选型  webpack + ant-design
    |
    |
    |- css  前端基础css样式
    |   |
    |   |- highlight  代码高亮
    |   |- header_footer  页面框架
    |   |- reset.scss  重置样式
    |
    |- js  前端JS【按照业务模块划分】
    |   |
    |   |- components 公共组件
    |   |- common  公共基础模块
    |
    |   |- about 关于作者
    |   |- detail 博客详情
    |   |- index 首页
    |   |- list 博客列表
    |   |- manage 管理后台

```