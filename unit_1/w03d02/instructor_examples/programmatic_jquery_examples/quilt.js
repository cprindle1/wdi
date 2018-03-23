$(function() {
  console.log('quilt.js');
  generateSquares(1000);
});

var generateSquares = function(numberOfSquares) {
  for (var i=1; i <= numberOfSquares; i++) {
    var $square = $('<div>').addClass('square');
    $square.text(i);
    $square.css('background-color', randColorRGB());
    $('body').append($square);
  }
}

var randColorRGB = function() {
  var red = Math.floor( Math.random() * 255 );
  var green = Math.floor( Math.random() * 255 );
  var blue = Math.floor( Math.random() * 255 );
  return "rgb(" + red + "," + green + "," + blue + ")";
}
