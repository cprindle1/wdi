$(function(){
  generateQuilt(200);
});

var generateQuilt = function(numSquares){
  for(var i=1; i<=numSquares; i++){
    var square = $('<div>').addClass('square');
      square.text(i);
      square.attr("id", "square"+i)
      // var backColor = "#"+(Math.floor(Math.random()*16777217)).toString(16);
      square.css("background-color", randColorRGB());
      $('body').append(square);
  }
}

var randColorRGB = function() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}
