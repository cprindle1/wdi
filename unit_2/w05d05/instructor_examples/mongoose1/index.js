var mongoose = require('mongoose');
var db = mongoose.connection;
var Article = require('./article.js');

mongoose.connect('mongodb://localhost:27017/example');

db.once('open', function(){
    console.log('I have connected to mongod!');
    // Article.create({
    //     title: 'Awesome Title',
    //     author: 'Matt'
    // }, function(error, article){
    //     console.log(error);
    //     console.log(article);
    // });
    // Article.find(
    //     { author: 'Matt' },
    //     function(err, foundArticles){
    //         console.log(foundArticles);
    //     }
    // )
    // Article.update(
    //         { author: 'Matt' },
    //         {
    //             $set: {
    //                 author: 'Matthew'
    //             }
    //         },
    //         { multi: true },
    //         function(err, response){
    //             console.log(response);
    //         }
    // );
    // Article.remove(
    //     { author: 'Matthew' },
    //     function(err, response){
    //         console.log(response);
    //     }
    // );
    // Article.create({
    //     title: 'Awesome Title',
    //     author: 'Matt'
    // }, function(error, article){
    //     Article.find(
    //         { author: 'Matt' },
    //         function(err, response){
    //             console.log(response);
    //         }
    //     );
    // });
    // Article.create({
    //     title: 'fun',
    //     author: 'Matt'
    // }, function(error, article){
    //     console.log('created first');
    // });
    // Article.create({
    //     title: 'another one',
    //     author: 'Matt'
    // }, function(error, article){
    //     console.log('created second');
    // });
    Article.create({
        title: 'Awesome Title',
        author: 'Matt'
    }, callback);
    var callback = function(error, article){
        Article.find(
            { author: 'Matt' },
            function(err, response){
                console.log(response);
            }
        );
    };
});
