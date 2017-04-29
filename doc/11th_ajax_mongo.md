# 增加管理后台界面



### CRUD ==> create + replace + update + delete

对应的mongoose方法: save( insert+ update) + findOneAndUpdate + remove

[增删改查文档](http://mongoosejs.com/docs/models.html)
### 博客列表及详情

1. '/blogDetail.action' =get=> 获取博客详情

2. '/blogList.action' =get=> 获取博客列表

3. '/blog.action' =post=>  增加或者更新博客

4. '/deleteBlog.action' =get=> 删除博客

### 博客分类相关

5. '/categoryList.action'=get=> 获取博客分类

6. '/category.action' =post=> 增加或者更新博客分类


### JSON versus BSON
1. BSON
BSON =  Bin­ary JSON 
主要特性:
	bin­ary-en­coded seri­al­iz­a­tion of JSON-like doc­u­ments
更多数据类型:
	比如 Date 、 Binary data	,采用C系数据类型
特点:
	轻量 高效数据交换

2. (JavaScript Object Notation) 

轻量级的数据交换格式,理想的数据交换语言。



[JSON](http://www.json.org/)
[BSON](http://bsonspec.org/)


### ObjectId

>  12-byte ObjectId 

-   4-byte value representing the seconds since the Unix epoch,
-   3-byte machine identifier,
-   2-byte process id, and
-   3-byte counter, starting with a random value.

[ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/)




