// var cheerio = require('cheerio');
//
// $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul><ul id="reds"><li class="apple">Gala</li><li class="apple">Braeburn</li><li class="tomato">Tomato</li></ul>');
//
// console.log($('.apple').text());
//
// $('ul').each(function(){
//   console.log($(this).attr('id'));
// });


// Import the node package
var cheerio = require('cheerio');
var request = require('request');
var articleInfo = [];

request('https://news.google.com', function(err, res, body){
  // Scrape as long as there's no error and the response has a status code of 200
    if(!err && res.statusCode == 200){
      // load the body of the repsonse into cheerio so that we can parse it. Cheerio documentation likes to have the document loaded into the `$` variable.
      var $ = cheerio.load(body);
      var articleObj = {};
      //  you can set the selector AND context for where the selector should be used.
      $('.article', '.lt-col').each(function (){
        articleObj.headline = $(this).text();
        articleObj.url = $(this).attr('href');
        articleInfo.push(articleObj);
      });
      console.log(articleInfo);
    }
  }
);
