var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');


var port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));

// db
var pokemon = require('./models/pokemon.js');

// index route
app.get('/pokemon', function(req, res) {
  res.render('index.ejs', {pokemon: pokemon});
});

app.get('/pokemon/new', function(req, res){
  res.render('create.ejs');
  // res.redirect('/pokemon/');

});
// show route
app.get('/pokemon/:id', function(req, res) {
  res.render('show.ejs', {
    pokemon: pokemon[req.params.id],
    index: req.params.id
  });
});

app.delete('/pokemon/:index', function(req,res){
  pokemon.splice(req.params.index, 1);
  res.redirect('/pokemon');
})

app.put('/pokemon/:index', function(req, res){
  console.log(req.body);
  pokemon[req.params.index].name= req.body.name;
  pokemon[req.params.index].img= req.body.img;
  pokemon[req.params.index].types= req.body.types;
  if(req.body.hp != undefined){
    pokemon[req.params.index].stats.hp= req.body.hp;
  }
  if(req.body.hp != undefined){
    pokemon[req.params.index].stats.hp= req.body.hp;
  }
  if(req.body.attack != undefined){
    pokemon[req.params.index].stats.attack= req.body.attack;
  }
  if(req.body.defense != undefined){
    pokemon[req.params.index].stats.defense= req.body.defense;
  }


  res.redirect('/pokemon');
});

// create route
app.post('/pokemon', function(req, res) {
  pokemon.push(req.body);
  res.redirect('/pokemon');
});

app.get('/pokemon/:index/edit', function(req, res){
  res.render('edit.ejs',{
      pokemon: pokemon[req.params.index],
      index: req.params.index
  });
});
