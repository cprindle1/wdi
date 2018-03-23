var express = require('express');
var app = express();

app.get('/somedata', function(request, response){
    response.send('here is your information');
});

app.get('/', function(request, response){
    response.send('I am grooot');
});

app.listen(3000, function(){
    console.log('I am listening...');
});
