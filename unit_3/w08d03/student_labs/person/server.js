var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var personController = require('./controllers/person.js');
app.use('/person', personController);

mongoose.connect('mongodb://localhost:27017/person');
mongoose.connection.once('open', function(){
    console.log('connected to mongoose...');
});

app.listen(3000, function(){
  console.log('listening');
});
