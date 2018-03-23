console.log("morning lesson js is connected");

// Add the window onload for jQuery
$(function(){

var selectedInitials = [];

  // Grab my element
  var $alphabetLetters = $('.alphabet');
  // console.log($alphabetLetters);

  // Set event handler
  var getParent = function(){
    console.log($(this).parent());
    var parentElement = ($(this).parent());
    parentElement.css("background-color", "yellow");
    $(this).css("background-color", "lightblue");
  }

  //Set event listeners
  $alphabetLetters.on('click', getParent);


})
