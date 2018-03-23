var express = require('express');

var app = express();
var superheros = [{name: 'batman', powers: ['utility belt', 'batmobile']}, {name: 'superman', powers: ['flight', 'invulnerability', 'x-ray vision']}, {name: 'hulk', powers: [' huge', 'green']}];

app.get('/superheros', function(req, res){
  res.send(superheros);
});

app.get('/superheros/:index', function(req, res){
  res.send(superheros[req.params.index])
});

app.listen(3000, function(){
  console.log('Here to save the day...');
});
