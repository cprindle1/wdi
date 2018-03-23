var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var steaks = require('./models/steaks.js')
app.use(methodOverride('_method'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/steaks/', function(req, res){
    res.render('index.ejs', {
        steaks: steaks
    });
});

app.get('/steaks/new', function(rew, res){
    res.render('new.ejs');
});

app.get('/steaks/:index', function(req, res){
    res.render('show.ejs', {
        steaks: steaks[req.params.index],
        index: req.params.index
    });
});

app.delete('/steaks/:index', function(req,res){
  steaks.splice(req.params.index, 1);
  res.redirect('/steaks');
})

app.put('/steaks/:index', function(req, res){
  steaks[req.params.index]= req.body;
  res.redirect('/steaks');
});

app.post('/steaks', function(req, res){
    steaks.push(req.body);
    res.redirect('/steaks');
});

app.get('/steaks/:index/edit', function(req, res){
  res.render('edit.ejs',{
      steak: steaks[req.params.index],
      index: req.params.index
  });
});

app.listen(3000,function(){
    console.log('listening');
});
