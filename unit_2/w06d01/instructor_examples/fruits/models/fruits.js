var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fruitSchema = new Schema({
    name : { type: String, required: true },
    color: { type: String, required: true },
    readyToEat: Boolean
});

var FruitModel = mongoose.model('Fruit', fruitSchema);

module.exports = FruitModel;
