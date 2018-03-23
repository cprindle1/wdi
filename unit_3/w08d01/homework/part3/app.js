var app = angular.module('MyApp', []);

app.controller('SongController', ['$scope', function($scope){
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
  this.addSong = function(){
    var newSong= {
      author: $scope.author,
      title: $scope.title,
      year: $scope.year,
      lyrics: $scope.lyrics.split(",")
    };
    this.songs.push(newSong);
  };

  this.shuffle=function(a){
  var j, x, i;
  for (i = a.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  }
  return a;
};
}]);
