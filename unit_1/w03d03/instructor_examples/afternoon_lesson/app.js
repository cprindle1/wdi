// console.log("afternoon lesson js is connected");

$(function(){
  // Grab the input box element
  var $inputBox = $('#input-box');

  // Grab the submit button
  var $submitButton = $('#submit-button');

  $submitButton.on('click', function(){
    var $outputBox = $("<p></p>");

    var $reply = $inputBox.val();

    $outputBox.html($reply);

    $('body').append($outputBox);

    $('form').trigger('reset');
  })
})
