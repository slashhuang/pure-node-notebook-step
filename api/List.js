/*
 * 博客列表
 */
 const mongoose = require('mongoose');

 // set schema 
 const BlogSchema = mongoose.Schema({ content: String });
 //A model is a class with which we construct documents
 // Schema结合model
 const BlogModel = mongoose.model('Blog', kittySchema);

