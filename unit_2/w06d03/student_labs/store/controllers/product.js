var express = require('express');
var router = express.Router();
var Product = require('../models/product.js');

router.get('/', function(req, res){
	Product.find({}, function(err, foundproduct){
		res.render('product/index.ejs', {
			product: foundproduct
		});
	})
});

router.get('/new', function(req, res){
	res.render('product/new.ejs');
});

router.post('/', function(req, res){
	Product.create(req.body, function(err, createdProduct){
		res.redirect('/product');
	});
});

router.get('/:id/edit', function(req, res){
	Product.findById(req.params.id, function(err, foundProduct){
		res.render('product/edit.ejs', {
			product: foundProduct
		});
	});
});

router.put('/:id', function(req, res){
	Product.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/product');
	});
});

router.delete('/:id', function(req, res){
	Product.findByIdAndRemove(req.params.id, function(){
		res.redirect('/product');
	});
});

router.get('/:id', function(req, res){
	Product.findById(req.params.id, function(err, foundProduct){
		res.render('product/show.ejs', {
			product: foundProduct
		});
	});
});

module.exports = router;
