var express = require('express');
var router = express.Router();

var User = require('../models/user.js');
var Photo = require('../models/photo.js');


router.post('/', function(req, res){
	User.create(req.body, function(err, createduser){
		res.redirect('/user');
	});
});
router.get('/', function(req, res){
	User.find({}, function(err, founduser){
		res.render('user/index.ejs', {
			user: founduser
		});
	});
});

router.get('/', function(req, res){
  res.render('user/index.ejs');
});

router.get('/new', function(req, res){
  res.render('user/new.ejs');
});

router.get('/:id/edit', function(req, res){
	User.findById(req.params.id, function(err, founduser){
		res.render('user/edit.ejs', {
			user: founduser
		});
	});
});

router.put('/:id', function(req, res){
	User.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/user');
	});
});

router.get('/:id', function(req, res){
	User.findById(req.params.id, function(err, founduser){
		res.render('user/show.ejs', {
			user: founduser
		});
	});
});

router.delete('/:id', function(req, res){
	User.findByIdAndRemove(req.params.id, function(err, foundUser){
		var photoIds = [];
		for(var i = 0; i< foundUser.photos.length; i++){
			photoIds.push(foundUser.photos[i]._id);
		}
		Photo.remove(
			{
				_id:{
					$in: photoIds
				}
			},
			function(err, data){
				res.redirect('/user');
			}
		);
	});
});

module.exports = router;
