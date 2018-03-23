$(function(){
console.log("all hooked up");

var $sketch = $('#submit');
var $sketchPad = $('#container')

var draw = function(){
  var red = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var rgb = "rgb("+red+","+green+","+blue+")";
  $(this).css('background-color',rgb);
}

var sketch = function(){
  var $input=parseInt($('#numSquares').val());
  var size = Math.floor(Math.sqrt($input));
  $input=size*size;
  console.log(size);
  console.log(500/size);


  // $('.square').css('height', 50);

  // $('#container').css('width', size*22);
  // $('#container').css('height', size*22);

  for(var i=0; i<$input; i++){
    var $square = $('<div>').addClass('square');
    $square.on('mouseover',draw);
    $sketchPad.append($square);
  }
  $('.square').css('height', 500/size);
  $('.square').css('width', 500/size);
}

$sketch.on('click', sketch);

});
