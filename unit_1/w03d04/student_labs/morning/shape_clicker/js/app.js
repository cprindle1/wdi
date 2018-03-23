$(function(){

var $triangle = $('.triangle');


var octagon = function(){
  $(this).attr('class', 'heart');
  var $heart = $('.heart');
  $heart.on('click', restart);
}
var triangleDown = function(){
  $(this).attr('class', 'octagon');
  var $octagon = $('.octagon');
  $octagon.on('click', octagon);
}
var square = function(){
  $(this).attr('class', 'triangle-down');
  var $triangleDown = $('.triangle-down');
  $triangleDown.on('click', triangleDown);
}
var circle = function(){
  $(this).attr('class', 'square');
  var $square = $('.square');
  $square.on('click', square);
}
var triangle = function(){
  $(this).attr('class', 'circle');
  var $circle = $('.circle');
  $circle.on('click', circle);
}
var restart = function(){
  $(this).attr('class', 'triangle')
  var $triangle = $('.triangle');
  $triangle.on('click', triangle);
}

$triangle.on('click', triangle);

});
