var mongoose = require('mongoose');
var Article = require('./article.js');

mongoose.connect('mongodb://localhost:27017/example');

var db = mongoose.connection;
db.once('open', function(){
  console.log('I have connected to mongod!');
  Article.create({
    title: 'Awesome title',
    author: 'Matt'
  }, function(error, article){
      console.log(error);
      console.log(article);
  });
  Article.find(
    {author: 'Matt'},
    function(err, foundArticles){
      console.log(foundArticles);
    }
  );

  Article.update(
    {author: 'Matt'},
    {
      $set: {
        author: 'Matthew'
      }
    },
    {multi: true},
    function(err, response){
      console.log(response);
    }
  )

  Article.remove(
    {author: 'Matthew'},
    function(err, response){
      console.log(response);
    }
  );
});
