/*
 * 索引
 * http://mongoosejs.com/docs/guide.html
 * https://docs.mongodb.com/manual/indexes/#Indexes-CompoundKeys
 */
 const mongoose = require('mongoose')
 const moment = require('moment')
 const blogSchema = require('./schema')['blogSchema']
 blogSchema.index({ title: 1, date: -1 }); // schema level






