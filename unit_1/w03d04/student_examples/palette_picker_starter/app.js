console.log('app.js loaded for palette picker');

$(function(){
var $colorPallette = $('#color-palette');
var $myPallette = $('#my-palette');
var $generateBtn = $('#generate');

var addColor = function(){
  var $chosenColor = $(this).css('background-color');
  var $mySquare = $('<div>').attr('class', 'square');
  $mySquare.css('background-color', $chosenColor);
  $myPallette.append($mySquare);
}
var makePallette = function(){
  $colorPallette.empty();
  for(var i = 0; i<150; i++){
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    var $square = $('<div>').addClass('square').css('background-color', randomColor);
    $colorPallette.append($square);
    $square.on('click', addColor);
  }
}
$generateBtn.on('click', makePallette);
});
