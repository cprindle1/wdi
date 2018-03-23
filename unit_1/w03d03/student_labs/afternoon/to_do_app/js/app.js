$(function(){

//GRAB ELEMENTS
var $addThing = $('#submit');

//EVENT HANDLERS
var deleteThing = function(){
  $(this).parent().remove();
}

var removeThing = function(){
  // var $thisThing = this.parent()
  // $(this).parent().remove();
  // $(this)
  $(this).parent().attr('class', 'completed');
  // console.log($(this));
  $deleteButton=$(this).text('REMOVE').attr('id','deleteThing');
  $deleteButton.on('click', deleteThing);
  $('#completed').append($(this).parent());

}

var addToThings = function(){
  var $userInput = $('#input-box');
  var $textInput=$userInput.val();
  var $newThing = $('<div class="to-do-item"></div>');
  var $newP = $('<p>'+$textInput+'</p>');
  $newP.text($textInput);
  $newThing.append($newP);
  $('#wtdForm').trigger('reset');


  var $removeButton = $('<button>').text('COMPLETED').attr('id','removeThing');
  $removeButton.on('click', removeThing);

  $newThing.append($removeButton);
  $('#to-do-list').append($newThing);
  $('#user-form').trigger('reset');
}

//EVENT LISTENERS
$addThing.on('click', addToThings);


});
