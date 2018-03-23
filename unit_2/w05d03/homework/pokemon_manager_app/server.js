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
app.use(express.static('public'));
// db
var pokemon = require('./pokemon.js');

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
    pokemon: pokemon[req.params.id]
  });
});

// create route
app.post('/pokemon', function(req, res) {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  pokemon.push(req.body);
  res.redirect('/pokemon');
});
