var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String},
  price: {type: Number, required: true, min: .01},
  img: {type: String, required: true},
  qty: {type: Number, required: true, min: 0}
});

var Products = mongoose.model('Products', productSchema);

module.exports = Products;
