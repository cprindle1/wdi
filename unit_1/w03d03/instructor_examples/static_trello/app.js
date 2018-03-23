console.log("static trello js file is connected");

// When we click "Add", we went an input box to appear below the title of the list, but above the "Add" button

// =============================
// Grab Elements
// =============================

//Grab the Add button
var $addBtn = $('.add-card');

// Grab the remove button
var $remove = $('.remove');

// =============================
// Event Handlers
// =============================

// Remove card
var removeCard = function() {
  $(this).parent().remove();
};

// Clear the input box
var clearInput = function(){
  console.log("clear input has been triggered");
  var $form = $('form');
  $form.trigger('reset');
};

// This is to prevent the default behavior of the form where it refreshes if you hit enter
$('form').on('submit', function(e) {
  e.preventDefault();
})

// A named function has to be created before it's added to a click event.
var newCard = function(){

  // Grab the input box
  var $enteredInput = $('#userInput');

  // Save the input to a variable
  var $inputValue = $enteredInput.val();

  // create a new card
  var $newCard = $('<div class="card">');

  // add text into the new card
  $newCard.html('<div class="text">'+ ($inputValue || 'No Input') +'</div>');

  // add a remove button to the card
  var removeButton = $('<button>remove</button>').addClass('remove');

  // Put event listener on the remove button INSIDE this function because it was just created.
  removeButton.on('click', removeCard);

  // Adding the new remove button to the card
  $newCard.append(removeButton);
  console.log($newCard);

  // append the new card to the parent
  console.log($(this).parent());
  $(this).parent().append($newCard);

  //clear out the old input from the input box;
  clearInput();
};

// =============================
// Event listeners
// =============================

$addBtn.on('click', newCard);
