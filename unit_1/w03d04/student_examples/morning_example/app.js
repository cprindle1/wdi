$(function(){

var $btn = $('button');

var loggingThis = function(){
  $(this).text('Has been Clicked');
  console.log($(this));
  $(this).css('background-color', "red");
  $(this).remove()
}

$btn.on('click', loggingThis);

});
