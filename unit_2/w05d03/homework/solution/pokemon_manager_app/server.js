//Dependencies
var express =  require('express');
var app = express();
var bodyParser = require('body-parser');

//Data
var pokemon = require('./pokemon.js');

//Listener
port = 3000;

app.listen(port, function(){
  console.log("connected to server at port " + port);
})

//Middleware

//To reference static files in the public folder
app.use(express.static('public'));

//To parse information when we create new items
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// I always do a test route to display all of my data before I parse it.
app.get('/data', function (req, res){
  res.send(pokemon);
})

// Index Route
app.get('/pokemon', function (req, res){
  res.render('pokemon/index.ejs', {pokemon: pokemon});
})

//New Route
app.get('/pokemon/new', function (req, res){
  res.render('pokemon/new.ejs');
})

// Create Route
app.post('/pokemon', function(req, res) {

console.log("WE HAVE ACCESSED THE POST ROUTE!");
console.log("Req.body object: ", req.body);

//We can run the user input of `type`, that is currently a string, through a function to turn it into an array so that it's treated the same as the other Pokemon `type` data.
  var getTypeArray = function(typeString) {
    var typeArray = [];
    typeArray = typeString.split(",");
    console.log("This is type: " + typeArray);
    return typeArray;
  }

//We can run the user input of `damages`, that is currently a string, through a function to turn it into an object so that it's treated the same as the other Pokemon `damage` data.
  var getDamagesObject = function(damagesStr) {
    // Split the damages from a string to an array. Perform reduce on the array.
    return damagesStr.split(',').reduce(function(obj, damage) {
      // Take the string in the array and split it by the :
      var currDamage = damage.split(':');
      // Turn it into an object by declaring the key and value from each of the new arrays
      obj[currDamage[0]] = currDamage[1];
      return obj;
    }, {});
  };

//Getting all user input.
  var createdPokemon = req.body;

//Manipulating the `type` to an array by passing it into the `getTypeArray`.
  createdPokemon.type = getTypeArray(createdPokemon.type);

//Manipulating the `damages` to an object by passing it through `getDamagesObject`.
  createdPokemon.damages = getDamagesObject(createdPokemon.damages);

//Pushing the pokemon that was created, with the modified type and damage, into our Pokemon data.
  pokemon.push(createdPokemon);

//Redirecting back to the last Pokemon in our data (which is the most recent one created).
  // res.redirect(`/pokemon/${pokemon.length-1}`);
  // OR
  res.redirect(`/pokemon/` + (pokemon.length-1));

});


//Show Route
app.get('/pokemon/:id', function (req, res){
  res.render('pokemon/show.ejs', {poke: pokemon[req.params.id]});
})
