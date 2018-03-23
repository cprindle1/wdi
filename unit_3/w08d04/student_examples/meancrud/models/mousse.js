var mongoose = require('mongoose');

var mousseSchema = mongoose.Schema({
  flavor: String,
  texture: String,
  color: String,
  goesWithFruit: Boolean
});

var Mousse = mongoose.model('Mousse', mousseSchema);

module.exports = Mousse;
