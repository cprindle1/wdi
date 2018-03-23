var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db
var products = require('./products.js');

// index route
app.get('/products', function(req, res) {
  res.render('index.ejs', {products: products});
});

app.get('/products/new', function(req, res){
  res.render('create.ejs');
});
// show route
app.get('/products/:id', function(req, res) {
  res.render('show.ejs', {
    product: products[req.params.id]
  });
});

// create route
app.post('/products', function(req, res) {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  products.push(req.body);
  res.redirect('/products');
});
