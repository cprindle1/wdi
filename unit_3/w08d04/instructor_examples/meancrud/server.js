var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

var mousseController = require('./controllers/mousse.js');
app.use('/mousse', mousseController);

mongoose.connect('mongodb://localhost:27017/moussecrud');

mongoose.connection.once('open', function(){
    console.log('connected to mongo...');
});

app.listen(3000, function(){
    console.log('listening...');
});
