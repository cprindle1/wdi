var express = require('express');
var router = express.Router();
var Person = require('../models/person.js');

router.get('/', function(req, res){
  Person.find({}, function(err, foundPerson){
    res.json(foundPerson);
  });
});

router.post('/', function(req, res){
    Person.create(req.body, function(err, createdPerson){
        res.json(createdPerson);
    });
});

router.put('/:id', function(req, res){
    Person.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedPerson){
        res.json(updatedPerson);
    });
});

router.delete('/:id', function(req, res){
    Person.findByIdAndRemove(req.params.id, function(err, deletedPerson){
        res.json(deletedPerson);
    });
});

module.exports = router;
