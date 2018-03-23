
//Dependencies
var express = require ( 'express' );
var app     = express();
var port = 3000;

app.use(express.static('public'));

//Database
var pokemon = require ( './pokemon.js' )

//Routes
app.get( '/', function( req, res ){
  res.send('Welcome to the Pokemon App!');
});

app.get( '/pokemon', function( req, res ){
  res.render( 'pokemon/index.ejs' , { pokemon : pokemon });
});

app.get( '/pokemon/:id', function (req, res){
  res.render( 'pokemon/show.ejs' , { pokemon : pokemon[req.params.id] });
});



//Server
app.listen( port, function(){
  console.log( 'pokemon on port', port, '!!!' );
});
