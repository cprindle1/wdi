
var dictionary = ["concatenate", "slum", "garrulous", "hype", "maladroit",
                  "spetznaz", "capybara", "clanger", "freehand", "acrid"];

runProgram = true;

while (runProgram) {

	console.log("HANGMAN");

	game.startGame(dictionary);

	game.wordArray();

	//Uncomment to get answer:
	//game.cheat();

	while (!game.isOver()) {

		game.render();

		var letterChoice = prompt("Enter a letter: ");

		game.setValues(letterChoice);

		// Sets values for letter to be hidden or shown
		// Migrated into game.setValues function:

		// if (game.guess(letterChoice)) {
		// 	for (var i = 0; i < game.currentWord.letters.length; i++) {
		// 		if (letterChoice === game.currentWord.letters[i].value) {
		// 			game.currentWord.letters[i].show();
		// 		};
		// 	};
		// };

		console.log("\n\n");
	};

	//End of game

	game.render();
	console.log("GAME OVER")
	console.log(game.overMessage());
	console.log("\n\n");

	playAgain = confirm("Play again?");
	if (!playAgain) {
		runProgram = false
	};
}
