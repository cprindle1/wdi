var express = require('express');

var app = express();


app.get('/fraiser', function(request, response){
  response.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be'");
});

app.get('/niles', function(request, response){
  response.send("You know, sometimes I wonder if I'm not just in psychiatry for the money");
});

app.get('/daphne', function(request, response){
  response.send("Well, have fun. I'm off to stick my head in the oven.");
});

app.get('/roz', function(request, response){
  response.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!");
});

app.get('/martin', function(request, response){
  response.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.");
});

app.listen(3000, function(){
  console.log("Hello, Seattle. I'm listening...");
});
