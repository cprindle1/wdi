var express = require('express');

var app = express();
var friends = [{name: 'Charlie', age: 36, location: 'Chantilly', eyeColor: 'brown', hairColor: 'brown'}, {name: 'Heather', age: 32, location: 'Chantilly', eyeColor: 'brown', hairColor: 'brown'}, {name: 'Will', age: 42, location: 'Fredericksburg', eyeColor: 'brown', hairColor: 'brown'}];

app.get('/friends', function(req, res){
  res.send(friends);
});

app.get('/friends/:index', function(req, res){
  res.send(friends[req.params.index])
});

app.listen(3000, function(){
  console.log('Friends...');
});
