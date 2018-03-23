var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fruitSchema = new Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  readyToEat: Boolean
});

var Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
