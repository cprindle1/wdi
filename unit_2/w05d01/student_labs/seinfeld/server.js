var express = require('express');

var app = express();


app.get('/jerry', function(request, response){
  response.sendFile('/index.html');
});

app.get('/elane', function(request, response){
  response.send(`
    <html>
        <body>
            <h1>Oh hello!</h1>
        </body>
    </html>
`);
});

app.get('/george', function(request, response){
  response.send(`
    <html>
        <body>
            <h1>!!!!!!!!!</h1>
        </body>
    </html>
`);
});

app.get('/kramer', function(request, response){
  response.send('hello buddy');
});

app.get('/newman', function(request, response){
  response.send('hello jerry');
});

app.get('/soupNazi', function(request, response){
  response.send('no soup for you');
});

app.get('/mrcostansa', function(request, response){
  response.send('hello newman');
});

app.listen(3000, function(){
  console.log("Hey NYC, I'm listening...");
});
