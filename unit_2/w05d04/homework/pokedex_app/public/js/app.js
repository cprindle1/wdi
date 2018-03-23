$(function(){
// var $card = $('.card');

$('.card').hover(
  // function(){$(this).removeClass('card');},
  function(){$(this).addClass('cardHover');},
  function(){$(this).removeClass('cardHover');}
);

$('.button').hover(
  // function(){$(this).removeClass('card');},
  function(){$(this).addClass('buttonHover');},
  function(){$(this).removeClass('buttonHover');}
);

});
