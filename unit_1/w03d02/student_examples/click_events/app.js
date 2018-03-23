$(function(){

  $btn=$('#btn');
  $btn.on('click', pfunc);
  $btn2=$('#btn2');
  $btn2.on('click', pfunc);


});


var pfunc = function(){
  var $p=$('<p>').text("THE EARTH IS AN OBLATE SPHEROID");
  $('body').append($p);
  $('body').toggleClass('black');
}
