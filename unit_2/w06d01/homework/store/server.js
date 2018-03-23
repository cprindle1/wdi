var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var methodOverride = require('method-override');
var productsController = require('./controllers/products.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/products', productsController);


mongoose.connect('mongodb://localhost:27017/products');
db.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('listening');
});
