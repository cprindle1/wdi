var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    Name: String,
    Age: Number,
    HairColor: String,
    EyeColor: String
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;
