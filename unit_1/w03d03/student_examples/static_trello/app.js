$(function(){

//GRAB ELEMENTS
var $addButton = $('#add-card');

//EVENT HANDLERS
var removeCard = function(){
  console.log("remove");
  $(this).parent().remove();
}

var getDataAndCreateCard = function(){
  var $userInput = $('#userInput');
  var $textInput=$userInput.val();
  var $newCard = $('<div class="card"></div>');
  $newCard.text($textInput);

  var $removeButton = $('<button>').text('remove').attr('id','removeCard');
  $removeButton.on('click', removeCard);

  $newCard.append($removeButton);
  var $currentList = $(this).parent();
  $currentList.append($newCard);
  $('#user-form').trigger('reset');
}

//EVENT LISTENERS
$addButton.on('click', getDataAndCreateCard);


});
