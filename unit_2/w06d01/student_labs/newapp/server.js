var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connection;
var People = require('./models/people.js');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/people/new', function(req, res){
  res.render('new.ejs');
});

app.get('/people/', function(req, res){
  People.find({}, function(error, allPeople){
    res.render('index.ejs', {people: allPeople
    });
  });
});

app.post('/people', function(req, res){
  People.create(req.body, function(){
    res.redirect('/people');
  });
});

app.get('/people/:id/edit', function(req, res){
    People.findById(req.params.id, function(err, people){
        res.render(
    		'edit.ejs',
    		{
    			people: people
    		}
    	);
    });
});

app.put('/people/:id', function(req, res){
    People.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedModel){
        res.redirect('/people');
    });
  });

app.delete('/people/:id', function(req, res){
  People.findByIdAndRemove(req.params.id, function(err, data){
      res.redirect('/people');
  });
});

app.get('/people/:id', function(req, res){
  People.findById(req.params.id, function(error, people){
    console.log(req.params.id);
    res.render('show.ejs', {people: people});
  });
});


mongoose.connect('mongodb://localhost:27017/peopledb');
db.once('open', function(){
  console.log('connected to mongo');
});

app.listen(3000, function(){
  console.log('listening');
});
