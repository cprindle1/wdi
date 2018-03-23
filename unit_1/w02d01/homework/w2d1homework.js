//lightswitch - can be a string set to "off" or "on".  could also use a boolean
var lightswitch = "on";
//email - string set to users email address
var email="prindle_charles@bah.com";
//spaceship - an array of the various components of a spaceship
var spaceship=["hull", "laser blasters", "tractor beam", "warp drive"];
//a list of wdi-remote-hopper student names - an array containing the various student names
var wdiRemoteHopperNames=["charlie", "tood", "stanley", "an"]
//a list of wdi-remote-hopper student names with a location an array of objects
var wdiStudents = [{name: "charlie", location: "chantilly"}, {name: "todd", location: "charlottesville"}];
//a list of wdi-remote-hopper students with location and list of favorite shows.  an array of objects.  objects contain a string for name, a string for location and an array for shows.
var wdiStudents=[{name:"charlie", location: "chantilly", favoriteShows: ["the simpsons", "breaking bad", "seinfeld"]}]

var monkeys=[{name:"monkey1", species:"chimp", foodsEaten:["banana", "pizza", "chicken wings"], favoriteColors: ["yellow", "black"]}, {name:"monkey2", species:"orangutan", foodsEaten:["salad", "vegetables"],favoriteColors: ["pink", "brown"]}, {name:"monkey3", species:"gorilla", foodsEaten:["cheeseburgers", "french fries"],favoriteColors: ["orange", "gray"]}];


//console log monkeys
for(var monkey in monkeys){
  console.log(monkeys[monkey]);
}
//console log first
console.log(monkeys[0]);
console.log(monkeys[1].foodsEaten);

var monkey_names=[];
for(var monkey in monkeys){
  monkey_names.push(monkeys[monkey].name);
}
console.log(monkey_names);

var monkey_colors=[];
for(var monkey in monkeys){
  for(var color in monkeys[monkey].favoriteColors){
    monkey_colors.push(monkeys[monkey].favoriteColors[color]);
  }
}

console.log(monkey_colors);

var inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Mallorie"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo=null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

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

var bondTitles = [];
for (var movie in bondFilms){
  bondTitles.push(bondFilms[movie].title);
}
console.log(bondTitles);

var oddBonds=[];
for (var movie in bondFilms){
  if(bondFilms[movie].year%2!==0){
    oddBonds.push(bondFilms[movie]);
  }
}

console.log(oddBonds);

var filmGross=0;
for (var movie in bondFilms){
  var gross="";
  gross=bondFilms[movie].gross.replace("$","");
  gross=gross.replace(/,/g,"");
  filmGross+=parseInt(gross, 10);
}

console.log(filmGross);

//find unique actors
var actors={};
for(var movie in bondFilms){
  console.log(bondFilms[movie]["actor"])
  actors[bondFilms[movie]["actor"]]=0;
}
//count occurences
for(var movie in bondFilms){
  for(var actor in actors){
    if(bondFilms[movie]["actor"]==actor){
      actors[actor]++;
    }
  }
}
//locate lease occurences
var smallest=actors[Object.keys(actors)[0]];
var least={};
for(var actor in actors){
  if(actors[actor]<smallest){
    smallest=actors[actor];
    least=actor;
  }
}

//locate least occurences in bondFilms
for(var movie in bondFilms){
  if(bondFilms[movie]["actor"]==least){
    console.log(bondFilms[movie]);
  }
}
