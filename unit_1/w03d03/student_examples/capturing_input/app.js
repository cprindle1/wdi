$(function(){

  var $inputBox = $('#input-box');

  var $submitButton = $('#submit');

  var $outputElement = $('#output');

  $submitButton.on('click', function(){
    $outputElement.text("hi, your favorite TV show is "+$inputBox.val());
    console.log("hi, your favorite TV show is "+$inputBox.val());
    $('form').trigger('reset');
  });

});
