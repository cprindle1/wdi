console.log("linked")

var $topCont = $('<div>');
$topCont.attr('id', 'top-container');
$('body').append($topCont);
$topCont.append('<h1>Trois couleurs: rouge, blanc, et blue</h1>');
$topCont.append('<div class="couleur"></div>');
$topCont.append('<div class="couleur"></div>');
$topCont.append('<div class="couleur"></div>');

var blocks = $(".couleur");
console.log(blocks);
blocks.eq(0).addClass('red');
blocks.eq(1).addClass('white');
blocks.eq(2).addClass('blue');

$('body').append('<div id="bottom-container"></div>');
$('#bottom-container').append('<h1>Lumpy Space Princess</h1>');
$('#bottom-container').append('<img src="https://d13yacurqjgara.cloudfront.net/users/135932/screenshots/2677225/lspdribbble_copy.png">');


$('h1').eq(0).html("Three colors: red, white, and blue");

$('.white').css("background-color", "black");

$('.blue').css("background-color", "orange");

$('body').append($('#top-container'));

$('img').attr('src', "https://pbs.twimg.com/profile_images/733503591378358273/oPSO93q4.jpg");

$('h1').eq(0).html("The Ice King");

$('#top-container').remove();
$('#bottom-container').remove();
$('body').append("<p>the ice king waz here</p>");
