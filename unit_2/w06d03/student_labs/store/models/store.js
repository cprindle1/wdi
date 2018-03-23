var mongoose = require('mongoose');

var storeSchema = mongoose.Schema({
	name: String,
	address: String
});

var store = mongoose.model('store', storeSchema);

module.exports = store;
