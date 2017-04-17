/*
 * mongoose学习主程序入口
 */

const mongoose = require('mongoose');
//设置mongoose的promise
/*
 * 参考文档
 * http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

// require('./base');
require('./model')