var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {type: String, required: true, unique: true},
  author: {type: String, required: true},
  comments: [{body: String, commentDate: Date}],
  publishDate: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
