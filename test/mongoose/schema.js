/*
 * 学习mongoose schema
 * http://mongoosejs.com/docs/guide.html
 * http://mongoosejs.com/docs/schematypes.html
 */

 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 /* SchemaTypes are--
 	String Number Date Buffer Boolean Mixed ObjectId Array
  */
 const blogSchema = new Schema({
	  title:  String,
	  author: String,
	  body:   String,
	  comments: [{ body: String, date: Date }],
	  date: { type: Date, default: Date.now },
	  hidden: Boolean,
	  meta: {
	    votes: Number,
	    favs:  Number
	  }
 });
 //Instances of Models are documents.
 blogSchema.methods.$findAll = function(cb) {
  return this.model('Blog').find(cb);
};
// Static methods
blogSchema.statics.findByName = function(title, cb) {
  return this.find({ title:title  }, cb);
};
//Query Helpers ==>for mongoose queries
blogSchema.query.byName = function(name) {
  return this.find({ name: new RegExp(name, 'i') });
};
module.exports = {
	blogSchema
}




