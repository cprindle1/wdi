var express = require('express');
var app = express();

var port = 3000;
//
// app.get('/calc/:num1/:num2/', function(req, res){
//   var sum=parseInt(req.params.num1) + parseInt(req.params.num2);
//   res.send("the sum is: "+ sum);
//   console.log(req.params.num1);
//   console.log(req.params.num2);
//
// });

app.get('/calcquery/:num1/:num2/', function(req, res){
  var answer=0;
  console.log(req.query.operation);
  if(req.query.operation=='add'){
    answer=parseInt(req.params.num1) + parseInt(req.params.num2);
    res.send("the sum is: "+ answer);
  }else if(req.query.operation=='multiply'){
    answer=parseInt(req.params.num1) * parseInt(req.params.num2);
    res.send("the product is: "+ answer);
  }else if(req.query.operation=='subtract'){
      answer=parseInt(req.params.num1) - parseInt(req.params.num2);
      res.send("the difference is: "+ answer);
  }else if(req.query.operation=='divide'){
      answer=parseInt(req.params.num1) / parseInt(req.params.num2);
      res.send("the quotient is: "+ answer);
  }else{
    res.send("No operation");

  }
});

app.listen(port, function() {
	console.log('app is running on port: ', port);
});
