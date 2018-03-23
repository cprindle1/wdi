//clicker
var clicker = {
  clickCount: 0,
  click: function(){this.clickCount++}
}

console.log(clicker.clickCount);
clicker.click();
console.log(clicker.clickCount);

//It's all about me
var myInformation = {
  name: "Charlie",
  age: 36,
  fact: "I like golf",
  statement: function(){return "Hi, my name is "+this.name+". I'm "+this.age+" years old and "+this.fact},
  birthday: function(){this.age++},
  nameChange: function(name){this.name=name}
}

myInformation.birthday();
console.log(myInformation.age);//test birthday
myInformation.nameChange("Rubpelstiltskin");
console.log(myInformation.name);//test nameChange

//Greeter
var greeter = {
  hello: function(name){return "Oh hello there, "+name},
  goodbye: function(name){return "Arrivederci, "+name},
  whoAreYou: function(name){return "Oh right! "+name+" how could I forget...!"}
}

console.log(greeter.hello(myInformation.name));
console.log(greeter.goodbye(myInformation.name));
console.log(greeter.whoAreYou(myInformation.name));

//Collecting Strings
var stringCollector = {
  collection: [],
  collect: function(string){this.collection.push(string.split("").reverse().join(""));},
  admireCollection: function(){for(var strings in this.collection){console.log(this.collection[strings])}}
}

stringCollector.collect("charles");
stringCollector.collect("brian");
stringCollector.collect("prindle");
stringCollector.admireCollection();

//ATM
var atm = {
  totalCash: 200,
  dispenseTwenties: function(numTwenties){
    if((numTwenties*20)<=this.totalCash){
      this.totalCash-=(numTwenties*20);
      return (numTwenties*20);
    }else{
      return null;
    }
  }
}
console.log(atm.dispenseTwenties(6));
console.log(atm.totalCash);
console.log(atm.dispenseTwenties(11));

//Hungry Turtles
var Leonardo = {
  name: "Leonardo",
  color: "blue",
  weapon: "katana",
  pizzaEaten: false,
  eatPizza: function(){if(this.pizzaEaten){console.log("Leonardo has already eaten pizza"); this.pizzaEaten=false;}else{console.log("Leonardo is eating pizza"); this.pizzaEaten=true;}}
}

Leonardo.eatPizza();
Leonardo.eatPizza();
Leonardo.eatPizza();
Leonardo.eatPizza();

//Calculator
var calculator = {
  output: 0,
  multiply: function(a,b){this.output=a*b;console.log(this.output);},
  divide: function(a,b){this.output=a/b;console.log(this.output);},
  add: function(a,b){this.output=a+b;console.log(this.output);},
  subtract: function(a,b){this.output=a-b;console.log(this.output);}
}

calculator.multiply(10,2);
calculator.multiply(-2,8);
calculator.multiply(2,2);
calculator.divide(10,2);
calculator.divide(-2,8);
calculator.divide(2,2);
calculator.add(10,2);
calculator.add(-2,8);
calculator.add(2,2);
calculator.subtract(10,2);
calculator.subtract(-2,8);
calculator.subtract(2,2);

//forEach
words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];

words.forEach(function(word){console.log(word);});

//Map
more_words = ["Joe", "Overeats", "Eggs"];
console.log(more_words.map(function(item){return item[0]}));

//Reduce
arr = [8, 8, 8, 8, 8, 8, 8, 8];
console.log(Math.pow(8,8));//to match reduce
console.log(arr.reduce(function(a,b){return a*b}));

//Chaining
var sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];
console.log(sheepShearers.map(function(index){return index.sheepCount;}).reduce(function(a,b){return a+b}));

//Hungry for more
//forEach
hopper = {start: 10, end: 6, location: "remote", type: "wdi"};
Object.keys(hopper).forEach(function(obj){console.log(hopper[obj]);});
Object.keys(hopper).forEach(function(obj){console.log(obj+": "+hopper[obj]);});

//return a single array
arr = [[8, 8], ["eight", "eight"], ["ate"]];
console.log(arr.reduce(function(a,b){return a+b},0));

//Chaining
var stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];
var filteredStockSymbols = stocks.filter(function(i){return i.price>150});
console.log(filteredStockSymbols);//filtered for >150

var filteredStockSymbols = stocks.filter(function(i){return i.price>150}).map(function(i){return i.symbol;});
console.log(filteredStockSymbols);//only stock symbols

var filteredStockSymbols = stocks.filter(function(i){return i.price>150}).map(function(i){return i.symbol;}).forEach(function(sym){console.log(sym)});//console.log symbols individually
