console.log("morning example is connected");

$(function(){

  //Grab the button
  var $btn = $('button');
  var $p = $('p');

  // event handler
  var remove = function(){
    $(this).hide();
    // .hide()
    // .detach()
  }

  //add the event listener
  $btn.on('click', remove);
  $p.on('click', remove)

})
