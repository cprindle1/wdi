var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

var storeController = require('./controllers/store.js');
app.use('/store', storeController);
var productsController = require('./controllers/product.js');
app.use('/product', productsController);

app.get('/', function(req, res){
  res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/blog');
mongoose.connection.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('listening...');
});
