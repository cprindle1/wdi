var express = require('express');
var router = express.Router();
var Article = require('../models/articles');

router.delete('/:id', function(req, res){
    Article.findByIdAndRemove(req.params.id, function(err, response){
        res.redirect('/articles');
    });
});

router.post('/', function(req, res){
    Article.create(req.body, function(err, createdArticle){
        res.redirect('/articles');
    });
});

router.get('/new', function(req, res){
    res.render('articles/new.ejs');
});

router.get('/', function(req, res){
    Article.find({}, function(err, foundArticles){
        res.render('articles/index.ejs', {
            articles: foundArticles
        });
    });
});

router.get('/:id', function(req, res){
    Article.findById(req.params.id, function(err, foundArticle){
        res.render('articles/show.ejs',{
            article: foundArticle
        });
    });
});

router.get('/:id/edit', function(req, res){
    Article.findById(req.params.id, function(err, foundArticle){
        res.render('articles/edit.ejs', {
            article: foundArticle
        });
    });
});

router.put('/:id', function(req, res){
    Article.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedArticle){
        res.redirect('/articles');
    })
});

module.exports = router;
