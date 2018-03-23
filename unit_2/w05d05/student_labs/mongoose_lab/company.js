var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
  name: {type: String, required: true, unique: true},
  founded: {type: Date},
  employees: {type: Number},
  products: {type: Array},
  active: Boolean,
  CEO: {
    name: String,
    age: Number
  }
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;
