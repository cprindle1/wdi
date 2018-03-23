$(function(){
var selectedInitials=[];

var $alphabetLetters = $('.alphabet');

var getParent = function(){
  console.log($(this).parent());
  var $parentElement = $(this).parent();
  $parentElement.css('background-color', 'yellow');
  $(this).css('background-color', 'lightblue');
}

$alphabetLetters.on('click', getParent);

});
