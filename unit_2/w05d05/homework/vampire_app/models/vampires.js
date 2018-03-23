var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//had to update schema to complete replace and update sections

var vampireSchema = new Schema({
  name: {type: String, required: true},
  hair_color: {type: String, default: 'blonde'},
  eye_color: {type: String},
  dob: {type: Date},
  loves: {type: Array},
  location: {type: String},
  gender: {type: String},
  victims: {type: Number, min: 0},
  portrayed_by: {type: String},
  is_actually: {type: String},
  hates: {type: Array},
});

var Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
