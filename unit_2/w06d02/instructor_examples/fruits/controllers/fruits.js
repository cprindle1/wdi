var express = require('express');
var router = express.Router();
var Fruits = require('../models/fruits.js');
var newFruits = require('../models/fruitseed.js');

router.get('/seed', function(req, res){
    Fruits.create(newFruits, function(err, createdFruits){
        res.send(createdFruits);
    });
});

router.get('/new', function(req, res){
    res.render('new.ejs');
});

router.post('/', function(req, res){
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruits.create(req.body, function(){
        res.redirect('/fruits');
    });
});

router.delete('/:id', function(req, res){
    Fruits.findByIdAndRemove(req.params.id, function(err, data){
        res.redirect('/fruits');
    });
});

router.get('/:id/edit', function(req, res){
    Fruits.findById(req.params.id, function(error, foundFruit){
        console.log(foundFruit);
        res.render('edit.ejs', {
            fruit:foundFruit
        });
    });
});

router.put('/:id', function(req, res){
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruits.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updatedModel){
        res.redirect('/fruits');
    });
});

router.get('/', function(req, res){
    Fruits.find({}, function(error, allFruits){
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

router.get('/:id', function(req, res){
    Fruits.findById(req.params.id, function(err, foundFruit){
        res.render('show.ejs', {
            fruit:foundFruit
        });
    });
});

module.exports = router;
