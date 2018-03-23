var express = require('express');
var app = express();
var request = require('request');
app.use(express.static('public'));

app.get('/status', function(req, res){
    request('https://status.github.com/api.json', function (error, response, body) {
        res.send(body);
    });
});

// Set process.env.APIKEY by putting `export APIKEY="YOURAPIKEYHERE"` into your ~/.bash_profile and restart terminal
app.get('/maps', function(req, res){
    request('https://maps.googleapis.com/maps/api/geocode/json?address='+req.query.address+'&key='+process.env.APIKEY, function (error, response, body) {
        res.send(body);
    });
});

app.listen(3000, function(){
    console.log('listening');
});
