var express = require('express');
var router = express.Router();

var Store = require('../models/store.js');

router.post('/', function(req, res){
	Store.create(req.body, function(err, createdStore){
		res.redirect('/store');
	});
});
router.get('/', function(req, res){
	Store.find({}, function(err, foundstore){
		res.render('store/index.ejs', {
			store: foundstore
		});
	});
});

router.get('/', function(req, res){
  res.render('store/index.ejs');
});

router.get('/new', function(req, res){
  res.render('store/new.ejs')
});

router.get('/:id/edit', function(req, res){
	Store.findById(req.params.id, function(err, foundStore){
		res.render('store/edit.ejs', {
			store: foundStore
		});
	});
});

router.put('/:id', function(req, res){
	Store.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/store');
	});
});

router.get('/:id', function(req, res){
	Store.findById(req.params.id, function(err, foundStore){
		res.render('store/show.ejs', {
			store: foundStore
		});
	});
});

router.delete('/:id', function(req, res){
	Store.findByIdAndRemove(req.params.id, function(){
		res.redirect('/store');
	});
});





module.exports = router;
