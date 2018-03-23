var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

var todosController = require('./controllers/todos.js');
app.use('/todos', todosController);

mongoose.connect('mongodb://localhost:27017/meancrud');
mongoose.connection.on('open', function(){
    console.log('connected to mongoose...');
});

app.listen(3000, function(){
    console.log('listening...');
});
