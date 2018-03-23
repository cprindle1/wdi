console.log('y');

var app = angular.module('myApp', []);

app.controller('myController', [function() {

		this.songs = [
                   {
										author: "De La Soul",
										title: "Ring Ring Ring",
										lyrics: [
														 "Hey how ya doin'",
						                 "Sorry ya can't get through",
						                 "Why don't you leave your name",
						                 "And your number",
						                 "And I'll get back to you"
									          ],
									  year: 1991,
									  hidden: false
									 }, {
										author: "Ini Kamoze",
										title: "Here Comes the Hotstepper",
										lyrics: [
														 "Here comes the hot stepper",
						                 "I'm the lyrical gangster",
						                 "Pick up the crew in-a de area",
						                 "Still love you like that"
									          ],
									  year: 1995,
									  hidden: false
									 }, {
										author: "Snow",
										title: "Informer",
										lyrics: [
														 "Informer",
						                 "You no say daddy me Snow me-a gon' blame",
						                 "I lick he boom boom down",
						                 "'tective man they say, say daddy me Snow me stab someone down the lane",
						                 "I lick he boom boom down."
									          ],
									  year: 1993,
									  hidden: false
									 }
								 ];
                 
    this.newSong = {};

	  this.toggle = function(index) {
				this.songs[index].hidden = !this.songs[index].hidden
        console.log("song info is toggled")
		}

	  this.shuffler = function(index) {
	  	this.songs[index].lyrics = shuffle(this.songs[index].lyrics);
	  };

	  this.addSong = function() {
	  	this.newSong.lyrics = this.newSong.lyrics.split(', ')
	  	this.songs.push(this.newSong);
	  }

    // Shuffle Algorithm from Stack Overflow: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

}]);
