var express=require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

var moviesController = require('./controllers/movies.js');
app.use('/movies', moviesController);

mongoose.connect('mongodb://localhost:27017/moviescrud');

mongoose.connection.once('open', function(){
  console.log('connected to mongo...');
});

app.listen(3000, function(){
  console.log('listening...');
});
