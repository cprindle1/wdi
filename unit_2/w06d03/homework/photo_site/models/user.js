var mongoose = require('mongoose');
var Photo = require('./photo.js');

var userSchema = mongoose.Schema({
	username: {type:String, required: true, unique: true},
  password: {type:String, required: true},
  photos: [Photo.schema]
});

var user = mongoose.model('user', userSchema);

module.exports = user;
