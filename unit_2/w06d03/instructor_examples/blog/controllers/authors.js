var express = require('express');
var router = express.Router();
var Author = require('../models/authors.js');

router.post('/', function(req, res){
    Author.create(req.body, function(err, createdAuthor){
        res.redirect('/authors');
    });
});

router.get('/', function(req, res){
    Author.find({}, function(err, foundAuthors){
        res.render('authors/index.ejs', {
            authors: foundAuthors
        });
    });
});

router.get('/new', function(req, res){
    res.render('authors/new.ejs');
});

router.get('/:id', function(req, res){
    Author.findById(req.params.id, function(err, foundAuthor){
        res.render('authors/show.ejs', {
            author: foundAuthor
        });
    });
});

module.exports = router;
