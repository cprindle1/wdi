var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));


var userController = require('./controllers/user.js');
app.use('/user', userController);
var photosController = require('./controllers/photo.js');
app.use('/photo', photosController);

app.get('/', function(req, res){
  res.render('index.ejs');
});

mongoose.connect('mongodb://localhost:27017/photosite');
mongoose.connection.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('listening...');
});
