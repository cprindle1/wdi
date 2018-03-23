var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var fruits = require('./models/fruits.js')
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/fruits/', function(req, res){
    res.render('index.ejs', {
        fruits: fruits
    });
});

app.get('/fruits/new', function(rew, res){
    res.render('new.ejs');
});

app.get('/fruits/:index', function(req, res){
    res.render('show.ejs', {
        fruit: fruits[req.params.index]
    });
});

app.delete('/fruits/:index', function(req,res){
  fruits.splice(req.params.index, 1);
  res.redirect('/fruits');
});

app.put('/fruits/:index', function(req, res){
  if(req.body.readyToEat==='on'){
    req.body.readyToEat = true;
  }else{
    req.body.readyToEat = false;
  }
  fruits[req.params.index]= req.body;
  res.redirect('/fruits');
});

app.post('/fruits', function(req, res){
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits');
});

app.get('/fruits/:index/edit', function(req, res){
  res.render('edit.ejs',{
      fruit: fruits[req.params.index],
      index: req.params.index
  });
});



app.listen(3000,function(){
    console.log('listening');
});
