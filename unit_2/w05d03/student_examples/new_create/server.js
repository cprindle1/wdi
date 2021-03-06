var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var fruits = require('./models/fruits.js')

app.use(function(req, res, next){
  console.log("run this everytime");
  next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/fruits/', function(req, res){
    res.render('index.ejs', {
        fruits: fruits
    });
});

app.get('/fruits/new', function(req, res){
  res.render('new.ejs');
});

app.post('/fruits', function(req, res){
  if(req.body.readyToEat === 'on'){
    req.body.readyToEat=true;
  }else{
    req.body.readyToEat=false;
  }
  fruits.push(req.body);
  res.redirect('/fruits');
})

app.delete('/fruits/:index', function(req, res){
	fruits.splice(req.params.index, 1); //remove the item from the array
	res.redirect('/fruits');  //redirect back to index route
});

app.get('/fruits/:index', function(req, res){
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});

app.post('/phony', function(req, res){
  res.send(req.body);
});

app.listen(3000,function(){
    console.log('listening');
});
