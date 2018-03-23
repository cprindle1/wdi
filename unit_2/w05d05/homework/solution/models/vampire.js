var mongoose = require('mongoose');

var vampireSchema = new mongoose.Schema({

    name: {
       type : String,
       required: true
     },
    hair_color:  {
       type : String,
      default: 'blonde'
    },
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: {
      type: Number,
      min: [0, 'Too few victims']
     }

});

var Vampire = mongoose.model ('Vampire', vampireSchema);

module.exports = Vampire;
