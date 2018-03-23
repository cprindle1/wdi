var express = require('express');
var app = express();

app.get('/', function(request, response){
    if(request.query.username !== undefined && request.query.password === "yay"){
        response.send('Welcome ' + request.query.username+ '!' )
    } else {
        response.send('No dice');
    }
});

var fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/awesome', function(req, res){
    res.send("Fruits are awesome!!!");
});

app.get('/fruits/:index', function(req, res){
    console.log(req.params);
    console.log(fruits[req.params.index]);
    res.send(fruits[req.params.index]);
});

app.listen(3000, function(){
    console.log('Listening...');
});
