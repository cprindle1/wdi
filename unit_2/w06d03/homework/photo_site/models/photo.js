var mongoose = require('mongoose');

var photoSchema = mongoose.Schema({
	title: {type: String, required: true},
  img: {type: String, required: true},
  description: String,
	userId: {type: String, required: true}
});

var photo = mongoose.model('photo', photoSchema);

module.exports = photo;
