//DEPENDENCIES
var bodyParser     = require ( 'body-parser' );
var express        = require ( 'express' );
var methodOverride = require ( 'method-override' );

var app            = express ();

//DATABASE
var pokemon        = require (  './models/pokemon.js' );

//PORT
var PORT           = 3000;

//MIDDLEWARE
app.use( bodyParser.urlencoded( { extended : false } ));
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );
app.use( methodOverride( '_method' ) );


//See JSON here:
app.get('/', function ( req , res ) {
  res.send(pokemon);
})

//INDEX Route
app.get( '/pokemon', function ( req, res ) {
  res.render( './pokemon/index.ejs', { pokemon : pokemon });
});

//NEW Route
app.get( '/pokemon/new',  function ( req, res ) {
  res.render('./pokemon/new.ejs');
});

//SHOW Route
app.get( '/pokemon/:id',  function ( req, res ) {
  //helper function to find Pokemon by ID:
  function findPokemonById( poke ) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  var showOne = pokemon.find( findPokemonById );
  res.render( './pokemon/show.ejs', { pokemon : showOne })
});

//EDIT Route
app.get( '/pokemon/:id/edit',  function ( req, res ) {
  //helper function to find Pokemon by ID:
  function findPokemonById( poke ) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  var showOne = pokemon.find( findPokemonById );
  res.render('./pokemon/edit.ejs', {pokemon : showOne});
});

//CREATE Route
app.post( '/pokemon', function ( req, res ) {
  //create an object with the same data(keys) and data structure as other pokemon
  console.log(req.body);

  var createOne = {};
  createOne.id                 = req.body.id;
  createOne.name               = req.body.name ;
  createOne.img                = req.body.img ;
  createOne.type               = req.body.type;
  createOne.stats              = {};
  createOne.stats.hp           = req.body.hp ;
  createOne.stats.attack       = req.body.attack ;
  createOne.stats.spattack     = req.body.spattack ;
  createOne.stats.defense      = req.body.defense ;
  createOne.stats.spdefense    = req.body.spdefense ;
  createOne.stats.speed        = req.body.speed ;
  createOne.damages            = {};
  createOne.damages.normal     = req.body.normal ;
  createOne.damages.fire       = req.body.fire ;
  createOne.damages.water      = req.body.water ;
  createOne.damages.electric   = req.body.electric ;
  createOne.damages.grass      = req.body.grass ;
  createOne.damages.ice        = req.body.ice ;
  createOne.damages.fight      = req.body.fight ;
  createOne.damages.poison     = req.body.poison ;
  createOne.damages.ground     = req.body.ground ;
  createOne.damages.flying     = req.body.flying ;
  createOne.damages.psychic    = req.body.psychic ;
  createOne.damages.bug        = req.body.bug ;
  createOne.damages.rock       = req.body.rock ;
  createOne.damages.ghost      = req.body.ghost ;
  createOne.damages.dragon     = req.body.dragon ;
  createOne.damages.dark       = req.body.dark ;
  createOne.damages.steel      = req.body.steel ;

  //adjust the type from a string to an Array
  createOne.type = createOne.type.split(",");

  //push the above object into the pokemon array
  pokemon.push( createOne );
  res.redirect( '/pokemon' );
});

//UPDATE Route
app.put( '/pokemon/:id', function ( req, res ) {
  //helper function to find Pokemon by ID:
  function findPokemonById(poke) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  var updateOne     = pokemon.find( findPokemonById );
  //update specific values of Pokemon object
  updateOne.id      = req.body.id;
  updateOne.name    = req.body.name;
  updateOne.img     = req.body.img;
  //stats are an object inside an object, loop through each stat and update
  Object.keys( updateOne.stats ).forEach(function( oneStat ) {
    updateOne.stats[oneStat] = req.body[oneStat];
  });
  //damages are an object inside an object, loop through each damage and update
  Object.keys( updateOne.damages ).forEach( function( oneDamage ) {
    updateOne.damages[oneDamage]  = req.body[oneDamage];
  });
  res.redirect( '/pokemon/' + req.body.id );
});

//DESTROY Route
app.delete ( '/pokemon/:id', function ( req, res ) {
  //helper function to find Pokemon by ID:
  function findPokemonById(poke) {
    return poke.id === req.params.id;
  };
  //Search Array of Pokemon objects by ID from req.params
  //get that index position
  var deleteOne = pokemon.indexOf( pokemon.find( findPokemonById ));
  //remove the pokemon at that index position
  pokemon.splice( deleteOne, 1);
  res.redirect ( '/pokemon' );
});

//Just for fun
var catchAndRelase = function () {
  totalPokemon = Math.floor( pokemon.length );
  catchOne = Math.floor( Math.random() * ( totalPokemon + 1 ));
  return pokemon[catchOne].name;
}

//Server
app.listen( PORT, function() {
  console.log( catchAndRelase() + ' found on port ' + PORT + '!!! At' , new Date(), 'Restart server to catch another one!!!' )
});



//useful resources:

//iterating over objects using ejs:
//http://stackoverflow.com/questions/31764552/ejs-how-to-iterate-object
