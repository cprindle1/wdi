$(function(){

  addH2();
  changeH2();
});



var addH2 = function(){
  $h2 = $('<h2>').text("Just getting started");
  $('body').append($h2)
}

var changeH2 = function(){
  $('h2').text("Getting warmed up!");
}
