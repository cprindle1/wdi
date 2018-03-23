var game = {
	guesses: 0,
	guessedLetters: [],
	words: [],
	currentWord: "",

	startGame: function(wordsArray) {
		this.guesses = 10;
		this.currentWord = new Word();
		this.guessedLetters = [];
		this.words = wordsArray;
	},

	wordArray: function() {
		var wor = this.words[Math.floor(Math.random() * this.words.length)];
		this.currentWord.getLetters(wor);
	},

	guess: function(letter) {
		if (this.guessedLetters.join('').match(letter)) {
			console.log("YOU ALREADY TRIED THAT LETTER.")
			return false
		};
		this.guessedLetters.push(letter);
		this.guesses -= 1;
		return this.currentWord.try(letter)
	},

	isOver: function() {
		if (this.currentWord.isFound()) {
			return true
		} else if (this.guesses === 0) {
			return true
		} else {
			return false
		};
	},

	overMessage: function() {
		if (this.currentWord.isFound()) {
			return "You win!"
		} else if (this.guesses === 0) {
			return "You lose."
		} else {
			return ""
		};
	},

	render: function() {
		this.currentWord.render();
		console.log("Guesses remaining: " + this.guesses);
		console.log("Guessed letters: " + this.guessedLetters.join(', '));
	},

	setValues: function(letterChoice) {
		if (this.guess(letterChoice)) {
			for (var i = 0; i < this.currentWord.letters.length; i++) {
				if (letterChoice === this.currentWord.letters[i].value) {
					this.currentWord.letters[i].show();
				};
			};
		};
	},

	cheat: function() {
		var testDisplayArray = []
		for (k = 0; k < this.currentWord.letters.length; k++) {
			testDisplayArray.push(this.currentWord.letters[k].value);
		}
		console.log(testDisplayArray.join(' '));
	}
}
