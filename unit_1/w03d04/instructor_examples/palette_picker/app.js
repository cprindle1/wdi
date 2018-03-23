console.log('app.js loaded for palette picker');

$(function(){

  //Grab the elements
  // Grab divs
  var $colorPalette = $('#color-palette');
  var $myPalette = $('#my-palette');

  // Grab button
  var $generateBtn = $('#generate');

  // Event Handlers

  var addColor = function(){
    // Save the chosen color to a variable
    var $chosenColor = $(this).css("background-color");

    // Make a square with a class of square
    var $mySquare = $('<div>').attr('class', 'square');

    // Set the our square to have a background color of the chosen color
    $mySquare.css("background-color", $chosenColor);

    // Append my square to my palette
    $myPalette.append($mySquare);
  };

  var makePalette = function(){
    // clear out color palette each time we click "generate"
      $colorPalette.empty();
    for (var i = 1; i <= 150; i ++){
      //make a variable that will hold a random color
      var randomColor = '#' + Math.floor(Math.random()* 16777215).toString(16);

      // Make a square and add a class of `square`
      var $square = $('<div>').attr('class', 'square');

      // Assign a random background color
      $square.css("background", randomColor);

      // Add an event that will call addColor
      $square.on('click', addColor);

      //append square to the color palette
      $colorPalette.append($square);
    }
  }

  $generateBtn.on('click', makePalette);

})
