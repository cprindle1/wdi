console.log("events and loops app file connected");

$(function (){

  //1. Get our sketch pad which is the body
  var $sketchPad = $('body');

  //8. Create an event handler to change the background-color of our squares on mouseover
  var changeColor = function(){
    $(this).addClass('pink');
  }

  // 2. Create 1000 divs
  for (var i = 1; i <= 1000; i ++){
    // 3. create div
    var $square = $('<div>');

    // 4. give our square a class of square
    $square.addClass("square");

    //7. Add an event listener
    $square.on('mouseover', changeColor);

    //5. Attach my square to the sketch pad
    $sketchPad.append($square);

  }
  //6. Check to see that my squares attached to the sketch pad
  // console.log($sketchPad);
})
