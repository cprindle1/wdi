//get button by id
    var clearBtn = $("#clear-board");

  //get board by id
    var board = $("#board");

    var turn = "";

// event handlers

  //new handler for clear button will eventually clear the board
    var clear = function() {
      console.log("clicked!");
    };
var player = 1

    // function
    var makeTurns = function() {
      //name variable for grabbed square
      var boardSection = $('.square');
      //if this has text alert the player they can't pick it
      if($(this).text("O") || $(this).text("X")) {
        alert("this square is taken, pick again");
        //else player === 1 change text to x
      } else if (player === 1) {
        $(this).text("X");
        //go to player 2
        player = 2;
        //else change text to o
      } else {
        $(this).text("O");
          //go to player one
        player = 1;
      }
    };






  //create board sections
    var $createBoard = function() {
      for (var i = 0; i < 9; i++) {
        var $boardSection = $("<div />").attr("class", "square").appendTo(board);
        //($boardSection[i]).on("click", somefunction);

      }  interateSquares();
    };



      var interateSquares = function() {
        var $boardSections = $(".square");
        //console.log($boardSections);
        for(var i = 0; i < $boardSections.length; i++) {
        //console.log($boardSections[i])

      };$boardSections.on("click", makeTurns);
      };





//event listeners


  //listener for clear button
    clearBtn.on("click", clear);

  //call create board function to make board with sections
    $createBoard();

})
