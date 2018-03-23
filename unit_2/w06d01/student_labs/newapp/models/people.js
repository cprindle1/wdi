var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var peopleSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
});

var People = mongoose.model('People', peopleSchema);

module.exports = People;
