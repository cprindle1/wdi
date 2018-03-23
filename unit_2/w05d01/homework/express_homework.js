var express = require('express');
var app = express();
//Greeting
app.get('/greeting', function(req, res){
  res.send('Hello, stranger');
});

app.get('/greeting/:name', function(req, res) {
  res.send('Wow! Hello there, '+ req.params.name);
});


app.listen(3000, function(){
  console.log("Homework is listening.....")
});

//Tip calculator
app.get('/tip/:total/:tipPercentage', function(req, res){
  res.send((parseInt(req.params.total)*parseInt(req.params.tipPercentage)/100).toString());
});

//magic 8 ball
var responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:question', function(req, res){
    res.send(responses[Math.floor(Math.random()*responses.length)]);
});

//fibonacci
app.get('/fibonacci/:fibNum', function(req, res){
  var last = 0;
  var now = 1;
  while(last<=req.params.fibNum){
    if(last == req.params.fibNum){
      res.send("Sweet number, dude.");
      return;
    }
    now = last + now;
    last = now - last;
  }
res.send("Brah, I can tell this ain't a fibonacci number. Wack.");
});

//fibonacci extended
app.get('/fibonacciextended/:fibNum', function(req, res){
  var findFib = function(fibIndex){
    var i = 0;
    var j = 1;
    if(fibIndex>2){
      return(findFib(fibIndex-2)+findFib(fibIndex-1));
    }else{
      return(1);
    }
    };
    var fibAnswer = findFib(req.params.fibNum);
    res.send(fibAnswer.toString());
});
