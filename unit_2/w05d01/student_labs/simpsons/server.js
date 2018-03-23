var express = require('express');

var app = express();


app.get('/homer', function(request, response){
  response.send("d'oh");
});

app.get('/marge', function(request, response){
  response.send("hmmmmmmmmm");
});

app.get('/bart', function(request, response){
  response.send("cowabunga");
});

app.get('/lisa', function(request, response){
  response.send("saxophone");
});

app.get('/maggie', function(request, response){
  response.send(".....");
});

app.get('/snowball_II', function(request, response){
  response.send("meow");
});

app.get('/santas_little_helper', function(request, response){
  response.send("ruff ruff");
});

app.listen(3000, function(){
  console.log("Hello, Springfield. I'm listening...");
});
