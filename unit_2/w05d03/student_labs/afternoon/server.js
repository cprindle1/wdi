// dependencies
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// port
var port = 3000;

// middleware
// ?

// data
var dates = [
  { name: "Bangor", created_at: Date.now() },
  { name: "San Jose", created_at: Date.now() },
  { name: "Bozeman", created_at: Date.now() }
];

// get route
app.get('/dates/', function(req, res){
    res.send(dates);
});
// post route
app.post('/dates', function(req, res){
  console.log('req.body is: ', req.body);
  if (!req.body.name) { req.body.name = "NO DATA" }
  req.body.created_at = Date.now();
  dates.push(req.body);
  console.log('all the dates data: ', dates);
  res.redirect('/dates');
});

app.listen(port, function() {
  console.log('Running on port: ', port)
});
