//OBJECT CONSTRUCTORS

var Letter = function(inp) {
	this.value = inp,
	this.hidden = true,
	this.hide = function() {
		return this.hidden = true;
	},
	this.show = function() {
		return this.hidden = false;
	},
	this.render = function() {
		if (this.hidden) {
			return "_";
		} else if (!this.hidden) {
			return this.value;
		};
	}
};

////////////////////////////////////////////////

var Word = function() {
	this.letters = [],

	this.getLetters = function(newWord) {

		for (i = 0; i < newWord.length; i++) {
			var ltrObj = new Letter(newWord[i]);
			this.letters.push(ltrObj);
		};
	},

	this.isFound = function() {

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].hidden) {
				return false
			};
		};
		return true
	},

	this.try = function(letter) {

		// game.guessedLetters.push(letter);
		// game.guesses -= 1;

		for (var i = 0; i < this.letters.length; i++) {
			if (letter === this.letters[i].value) {
				return true
			};
		};
		return false
	},

	this.render = function() {

		var wordDisplay = []
		this.letters.forEach(function(l) {
			wordDisplay.push(l.render());
		});
		console.log(wordDisplay.join(' '));
	}
}
