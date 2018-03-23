var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	name:String,
	description:String,
	price: Number,
	qty: Number
});

var product = mongoose.model('product', productSchema);

module.exports = product;
