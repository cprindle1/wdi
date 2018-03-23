var cheerio = require('cheerio');
var request = require('request');
var articleInfo=[];

request('http://news.google.com', function(err, res, body){
  if(!err & res.statusCode === 200){
    var $ = cheerio.load(body);
    $('.article', '.lt-col').each(function(){
      var articleObj = {};
      articleObj.headline=$(this).text();
      articleObj.url=$(this).attr('href');
      articleInfo.push(articleObj);
    });
    console.log(articleInfo[0]);
  }
});
