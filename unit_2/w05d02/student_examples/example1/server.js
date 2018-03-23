var express = require('express');
var app = express();
var fruits = require('./models/fruits.js');

app.get('/fruits', function(req, res){
  res.render('index.ejs', {fruits});
});

app.get('/fruits/:index', function(req, res){
  res.render('show.ejs', {
    fruit: fruits[req.params.index]
  });
});

app.listen(3000, function(){
  console.log('I am listening...');
});
