var express = require('express');
var router = express.Router();
var Photo = require('../models/photo.js');
var User = require('../models/user.js');

router.get('/', function(req, res){
	Photo.find({}, function(err, foundphoto){
		res.render('photo/index.ejs', {
			photo: foundphoto
		});
	});
});

router.get('/new', function(req, res){
	User.find({}, function(err, foundUser){
		res.render('photo/new.ejs',{
			user: foundUser
		});
	});
});

router.post('/', function(req, res){
	User.findById(req.body.userId, function(err, foundUser){
		Photo.create(req.body, function(err, createdPhoto){
			foundUser.photos.push(createdPhoto);
			foundUser.save(function(err, savedUser){
				res.redirect('/photo');
			});
		});
	});
});


router.get('/:id/edit', function(req, res){
	Photo.findById(req.params.id, function(err, foundPhoto){
		User.find({}, function(err, allUsers){
			User.findOne({'photos._id':req.params.id}, function(err, foundPhotoUser){
				res.render('photo/edit.ejs', {
					photo: foundPhoto,
					users: allUsers,
					photoUser: foundPhotoUser
				});
			});
		});
	});
});

router.put('/:id', function(req, res){
	Photo.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedPhoto){
		User.findOne({'photos._id': req.params.id}, function(err, foundUser){
			if(foundUser._id.toString() !== req.body.userId){
				foundUser.photos.id(req.params.id).remove();
				foundUser.save(function(err, savedFoundUser){
					User.findById(req.body.userId, function(err, newUser){
						newUser.photos.push(updatedPhoto);
						newUser.save(function(err, savedNewUser){
							res.redirect('/photo/'+req.params.id);
						});
					});
				});
			}else{
				foundUser.photos.id(req.params.id).remove();
				foundUser.photos.push(updatedPhoto);
				foundUser.save(function(err, data){
					res.redirect('/photo/'+req.params.id);
				});
			}
		});
	});
});

router.delete('/:id', function(req, res){
	Photo.findByIdAndRemove(req.params.id, function(err, foundPhoto){
		User.findOne({'photos._id':req.params.id}, function(err, foundUser){
			foundUser.photos.id(req.params.id).remove();
			foundUser.save(function(err, data){
				res.redirect('/photo');
			});
		});
	});
});

router.get('/:id', function(req, res){
	Photo.findById(req.params.id, function(err, foundPhoto){
		User.findOne({'photos._id':req.params.id}, function(err, foundUser){
			console.log(foundUser);

			res.render('photo/show.ejs', {
				user: foundUser,
				photo: foundPhoto
			});
		});
	});
});

module.exports = router;
