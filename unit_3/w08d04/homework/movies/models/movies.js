var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
  title: String,
  year: Number,
  rating: Number
});

var Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;
