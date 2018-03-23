var express = require('express');
var router = express.Router();
var Movies = require('../models/movies.js');

router.get('/', function(req, res){
  Movies.find({}, function(err, foundMovies){
    res.json(foundMovies);
  });
});

router.post('/', function(req, res){
  Movies.create(req.body, function(err, createdMovies){
    res.json(createdMovies);
  });
});

router.put('/:id', function(req, res){
  Movies.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedMovies){
    res.json(updatedMovies);
  });
});

router.delete('/:id', function(req, res){
  Movies.findByIdAndRemove(req.params.id, function(err, deletedMovies){
    res.json(deletedMovies);
  });
});

module.exports = router;
