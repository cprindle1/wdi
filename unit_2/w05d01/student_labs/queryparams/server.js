var express = require('express');
var app = express();
var userInfo = [{name: 'charlie', password: '1234'}, {name: 'bob', password: 'password'}, {name: 'jon', password: 'abcde'}];
//
app.get('/', function(req, res){
  var foundUser=false;
  for(var i=0; i<userInfo.length; i++){
    if(req.query.username == userInfo[i].name && req.query.password=== userInfo[i].password){
      res.send('welcome '+req.query.username+'!');
      foundUser=true;
    }
  }
  if(!foundUser){
    res.send('no dice');
  }
});
// var fruits=['apple', 'banana', 'pear'];
//
// app.get('/fruits/awesome', function(req, res){
//   res.send('fruits are awesome!');
// });
//
// app.get('/fruits/:index', function(req, res){
//   res.send(fruits[req.params.index]);
// });



app.listen(3000, function(){
  console.log('listening...');
});
