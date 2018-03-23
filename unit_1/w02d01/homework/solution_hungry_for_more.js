// # bondFilms humdinger solution
//
// Console log the single movie **object** that contains the actor who starred in the least number of films.


var bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];


// Establish an object where the actor's frequencies will be stored:
var actorFrequencies = {}

// Establish a list of actors and remove duplicates by using them as keys within an object. Set the value of each to 0 with the intention of looping again to increase that number.

for (var i=0; i < bondFilms.length; i++) {
  actorFrequencies[bondFilms[i].actor] = 0;
}

console.log(actorFrequencies);

// Result:

// >{ 'Daniel Craig': 0,
// >  'Sean Connery': 0,
// >  'Roger Moore': 0,
// >  'Pierce Brosnan': 0,
// >  'George Lazenby': 0,
// >  'Timothy Dalton': 0 }

// No dupes!

// Loop again and increase each actors frequency

for (var i=0; i < bondFilms.length; i++) {
  actorFrequencies[bondFilms[i].actor]++;
}

console.log(actorFrequencies)

// Result:

// > { 'Daniel Craig': 3,
// >   'Sean Connery': 6,
// >   'Roger Moore': 7,
// >   'Pierce Brosnan': 4,
// >   'George Lazenby': 1,
// >  'Timothy Dalton': 2 }

// Find the actor with the lowest frequency. Loop over the object and replace `lowestNum` whenever it encounters a lower number than before, and then also replace the `leastBond` actor name:

var lowestNum = Infinity;
var leastBond = null;

for (var key in actorFrequencies) {
  if (actorFrequencies[key] < lowestNum) {
    lowestNum = actorFrequencies[key];
    leastBond = key;
  }
}

console.log(leastBond)

// Result:
// > George Lazenby


// Use this result to find the object in the `bondFilms` array with that actor name:

var movieObject = null;

for (var i=0; i < bondFilms.length; i++) {
  if (bondFilms[i].actor = leastBond) {
    movieObject = bondFilms[i];
  }
}

console.log(movieObject);

// Result:
// > { title: 'License to Kill',
// >  year: 1989,
// >  actor: 'George Lazenby',
// >  gross: '$285,157,191' }

// > solution by Thomas Page
