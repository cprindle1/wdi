$(function(){

  $div = $('<div>').text("Add random image");
  $div.addClass('image');
  $('body').append($div);
  $div.on('click', pickPic);

});


var imgArr = ["https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/65fa961e-8f22-4fe6-a420-3c3c26dd2953.jpg._CB289161999__SL300__.jpg", "http://www.minionnation.co.uk/images/shareimage.jpg","https://media4.giphy.com/media/m6OomwWCojfS8/200_s.gif","https://s-media-cache-ak0.pinimg.com/736x/48/bd/3f/48bd3f6e928d7cb4b8d499cb0f96b8a8.jpg","http://lullydeverdade.com.br/wp-content/uploads/minions_lullydeverdade_02.jpg", "http://aka-minions-2015.gloryone.pl/au/;gfx/images/delivery/minion_guitar.png"]

var pickPic = function(){
  $div.append("<img src="+imgArr[Math.floor(Math.random()*imgArr.length)]+">");
}
