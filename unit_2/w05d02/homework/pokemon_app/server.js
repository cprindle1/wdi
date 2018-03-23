var express = require('express');
var app = express();
var pokemon = require('./models/pokemon.js');

app.get('/pokemon', function(req, res){
  res.render('./pokemon/index.ejs', {pokemon});
});

app.get('/pokemon/:id', function(req, res){
  res.render('./pokemon/show.ejs', {poke: pokemon[req.params.id]
  });
});

app.listen(3000, function(){
  console.log('Welcome to the Pokemon App!');
});
