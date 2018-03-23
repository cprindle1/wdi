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

router.get('/', function(req, res){
  res.render('authors/index.ejs');
});

router.get('/new', function(req, res){
  res.render('authors/new.ejs')
});

router.get('/:id/edit', function(req, res){
	Author.findById(req.params.id, function(err, foundAuthor){
		res.render('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});

router.put('/:id', function(req, res){
	Author.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/authors');
	});
});

router.get('/:id', function(req, res){
	Author.findById(req.params.id, function(err, foundAuthor){
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});

router.delete('/:id', function(req, res){
	Author.findByIdAndRemove(req.params.id, function(){
		res.redirect('/authors');
	});
});





module.exports = router;
