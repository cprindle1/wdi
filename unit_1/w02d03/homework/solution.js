// ![ga](http://mobbook.generalassemb.ly/ga_cog.png)
//
// # WDIR-HOPPER
//
// ---
// Title: Object Methods & Iterators <br>
// Type: Homework<br>
// Duration: "3:00 - 4:00"<br>
// Creator:WDI-Archer, WDIR-R2D2, WDIR-Matrix<br>
//     Modified by: Kristyn Bryan<br>
//     Course: WDIR-Hopper<br>
// Competencies: Practice creating objects, object methods <br>
// Prerequisites: JavaScript, Objects, Iterators <br>
//
// ## Setup
//
// 1. Make a file inside your `homework` folder for w02d03 called `answers.js`.
// 2. Write all of your code in `answers.js`.
//
// :elephant: Remember to test each of your answers!
//
//
// ## Clicker
//
// 1. Make an object called `clicker`, which has a `clickCount` property, and a `click` method.
// 2. Have the `click` method increment the `clickCount` by 1 each time it is called.
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 1 - Clicker done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("Clicker:")

var clicker = {
  clickCount: 0,
  click: function(){
    this.clickCount++;
  }
};

console.log("==============================================")
// ==============================================

// ## It's All About Me
//
// 1. Create an object called `myInformation`.
// 2. Assign to it your name, your current age, and a fact about you.
// 3. Inside `myInformation`, create a method called `statement` that returns a statement about you including your name, this fact, and how old you will be in 10 years.
// 4. Inside `myInformation`, create another function that can be used to increment the value of your age by 1 each time that you call it.
// 5. It's your birthday! Call this new method that you made that will increase your age.
// 6. Create another function that can be used to change the value of your `name`.
// 7. You're feeling funky and decide that your new name is `Rumpelstiltskin`. Call the method that will update your name and assign this new name. Log your object to confirm the changes.
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 2 - It's all about Me done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("SOLUTION: It's All About Me")

var myInformation = {
  name: "Kristyn",
  inTenYears: 45,
  birthday: function(){
    this.inTenYears++;
  },
  nameChange: function(newName){
    this.name = (newName)
  }
};

myInformation.birthday();
myInformation.nameChange("Rumpelstiltskin");

console.log(myInformation);

console.log("==============================================")
// ==============================================

// ## Greeter
// 1. Create an object called `greeter`.
// 2. Inside the `greeter` object, create a method called `hello` that takes a name as a parameter and returns a greeting message followed by the `name` parameter.
//
// >Example:
// `Oh hello there, Matthew`
//
// 3. Create another method inside `greeter` called `goodbye` that takes a name as a parameter and returns a farewell greeting followed by the `name` parameter.
//
// >Example:
// `Arrivederci, Matthew!`
//
//
// 4. Create a final method inside `greeter` called `whoAreYou` that takes a name as a parameter and returns "Oh right! ", followed by the `name` parameter, followed by " how could I forget...!"
//
// >Example:
// `Oh right! Matthew how could i forget...!`
//
// 5. Play around executing your functions by accessing them through the object.
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 3 - Greeter done"
// <hr>
//
// ==============================================
// SOLUTION:
console.log("SOLUTION: Greeter")

var greeter = {
  hello: function(name) {
    return 'Hi, hello and how are you, ' + name + '?';
  },
  goodbye: function(name) {
    return 'Bye, bye ' + name + '! We\'ll see you next time.';
  },
  whoAreYou: function(name) {
    return 'Oh right! ' + name + ', how could I forget...!';
  }
};

console.log(greeter.hello("Joe"));
console.log(greeter.goodbye("Joe"));
console.log(greeter.whoAreYou("Joe"));

console.log("==============================================")
// ==============================================

// ## Collecting Strings
//
// Make an object called `stringCollector`, which has:
// 1. a `collection` property - an array to hold strings
// 2. a `collect` method which takes a string as a parameter
// 3. the string collector prefers the strings to be totally reversed in their collection, however, so make sure to reverse it before adding it to the collection
// 4. add an `admireCollection` method which prints out each string in the collection to the console, one line at a time
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 4 - Collecting Strings done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("SOLUTION: Collecting Strings")

// NOTE: I've added extra console.logs here to examine what the string looks like at each stage.

var stringCollector = {
  collection: [],
  collect: function(string){
    console.log("string: " + string)
    splitString = string.split("");
    console.log("splitString: " + splitString)
    reverseString = splitString.reverse();
    console.log("reverseString: " + reverseString)

    joinArray = reverseString.join("");
    console.log("joinArray: " + joinArray)

    this.collection.push(joinArray);
    console.log("collection: " + this.collection);

  },
  admireCollection: function(){
    this.collection.forEach(function(item){
      console.log(item)
    });
  }
};

stringCollector.collect("this is a string");
stringCollector.admireCollection();

console.log("==============================================")
// ==============================================

// ## ATM
//
// Make an object called `atm` which has two properties:
// 1. `totalCash`, the total amount of cash in the `atm`
// 2. `dispenseTwenties`, a method with takes a number of twenties and, if there is enough cash, returns the total number of cash it is giving out.
// 3. If there is not enough cash, return `null` instead.
//
// >For example, if the `atm` has `200` dollars left, the call to `dispenseTwenties(6)` should return `120`, and update the `totalCash` to `80`.  However a call to `dispenseTwenties(11)` should return `null`.
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 5 - ATM done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("SOLUTION: ATM")

atm = {
  totalCash: 180,
  dispenseTwenties: function(twenties) {
    cashWanted = twenties * 20;
    if (this.totalCash >= cashWanted){
      console.log("Here's your cash! " + cashWanted);
      this.totalCash = this.totalCash - cashWanted;
    } else {
      console.log("not enough cash");
      return null;
    }
  }
};

atm.dispenseTwenties(10);

console.log("==============================================")
// ==============================================

// ## Hungry Turtles
//
// 1. Create an object called `Leonardo`.
// 2. Leonardo should have a name attribute of "Leonardo", a color attribute of "Blue", and a weapon attribute of "Katana".
// 3. Leonardo should also have a boolean property called pizzaEaten that is initially set to false.
// 4. Add a method to Leonardo called eatPizza() which does the following:
//     - If pizzaEaten is true, print out "Leonardo has already eaten pizza" and set pizzaEaten to false.
//     - If pizzaEaten is false, print out "Leonardo is eating pizza" and set pizzaEaten to true.
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 6 - Hungry Turtles done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("SOLUTION: Hungry Turtles")

var Leonardo = {
  name: 'Leonardo',
  color: 'blue',
  weapon: 'katana',
  pizzaEaten: false,
  eatPizza: function() {
    if(Leonardo.pizzaEaten) {
      console.log('Leonardo has already eaten pizza.');
      Leonardo.pizzaEaten = false;
      // or
      // Leonardo.pizzaEaten = !Leonardo.pizzaEaten
    } else {
      console.log('Leonardo is eating pizza.');
      Leonardo.pizzaEaten = true;
      // or
      // Leonardo.pizzaEaten = !Leonardo.pizzaEaten
    }
  }
};

// Should return false
Leonardo.eatPizza();

// Should return true
Leonardo.eatPizza();

// Should return false
Leonardo.eatPizza();

console.log("==============================================")
// ==============================================

// ## Calculator
//
// 1. Create an object called `calculator`
// 2. Create a property called `output`
// 3. Create a method inside your object that will multiply two numbers and change the `output` value to this current value. This method should also log the value of `output`.
// 4. Create a function that will divide two numbers. It should also change the `output` value to this current value. This method should also log the value of `output`.
// 5. Practice using your calculator with some pairs (10, 2), (-2, 8), (2, 2).
// 6. If there's additional time, add methods for `addition` and `subtraction`
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 7 - Calculator done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("SOLUTION: Calculator")

var calculator = {
  output: 0,
  multiply: function(num1, num2){
    this.output = num1 * num2;
    console.log("The product is: " + this.output);
  },
  divide: function(num1, num2){
    this.output = num1 / num2;
    console.log("The quotient is: " + this.output);
  },
  add: function (num1, num2){
    this.output = num1 + num2;
    console.log("The sum is: " + this.output);
  },
  subtract: function (num1, num2){
    this.output = num1 - num2;
    console.log("The difference is: " + this.output);
  }

}

calculator.multiply(2, 5);
calculator.divide(2, 5);
calculator.add(10, 2);
calculator.subtract(-2, 8);


console.log("==============================================")
// ==============================================

// # Iterators
//
// ## forEach
// `.forEach` is the basic iterator, all it does is step through each item in an array.
//
// 1. Using the array `words`, log each word in `words` in upper case using `.forEach.`
//
words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 8 - forEach done"
// <hr>
//
// ==============================================
// SOLUTION:
console.log("SOLUTION: forEach")

capitalizedWords = words.forEach(function(word){
	console.log(word.toUpperCase());
});

console.log("==============================================")
// ==============================================

// ## Map
// `.map` is like `.forEach` but it returns a new array with the selections and / or transformations applied in the iterator. `.map` saves to a new array and does not alter the original array.
//
// 1. Map to a new array that stores only the first letter from each word in `more_words`.
//
// ```
more_words = ["Joe", "Overeats", "Eggs"];
// ```
//
// Expected result:
//
// ```
// ["J", "O", "E"]
// ```
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 9 - map done"
// <hr>
//

// ==============================================
// SOLUTION:
console.log("SOLUTION: Map")

var new_arr = more_words.map(function(word) {
	return word.charAt(0);
});

console.log(new_arr);

console.log("==============================================")
// ==============================================

// ## reduce
// `.reduce` iterates over the elements in an array and smooshes them together into a single variable according to the instructions in the iterator. Like `.map`, it returns a new value and does not alter the original array.
//
// 1. Return the *product* of the numbers in `arr`.
// ```
arr = [8, 8, 8, 8, 8, 8, 8, 8];
// ```
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 10 - reduce done"
// <hr>
//
// ==============================================
// SOLUTION:
console.log("SOLUTION: Reduce")

new_value = arr.reduce(function(sum, n){
	return sum += n
});
console.log(new_value);

console.log("==============================================")
// ==============================================

// ## Chaining
//
// 1. Using iterators to find the total sheepCount of sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast:
//
// ```
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
// ```
//
// Expected Output:
// ```
// => 3238
// ```
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 11 - chaining done"
// <hr>
//
// ==============================================
// SOLUTION:
console.log("SOLUTION: Chaining")

totalSheep = sheepShearers.map(function(shearer) {
	return shearer.sheepCount;
}).reduce(function(initialTotal, itemInArray) {
	return initialTotal + itemInArray;
}, 0);

console.log(totalSheep);


// If we break it down (unchain):
// totalSheep = sheepShearers.map(function(shearer) {
// 	return shearer.sheepCount;
// });
//   console.log("Right now, totalSheep is: " + totalSheep);
//
// reducedSheep = totalSheep.reduce(function(initialTotal, itemInArray) {
// 	return initialTotal + itemInArray;
// }, 0);
//
// console.log(reducedSheep);

console.log("==============================================")
// ==============================================

// # Videos
//
// #### Advanced Selectors
//
// 1. Watch [this video](https://www.youtube.com/watch?v=Zudl-fCDSdM&index=14&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about family selectors.
// 1. Watch [this video](https://www.youtube.com/watch?v=PuF0drOMN3E&index=15&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about attribute selectors.
//
// #### Responsive Design
//
// 1. Watch [this video](https://www.youtube.com/watch?v=BsuCBmzLf_U&index=21&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) an introduction to responsive design.
// 1. Watch [this video](https://www.youtube.com/watch?v=iQIj7Lu64M4&index=22&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about mobile first design using min/max-width/height
// 1. Watch [this video](https://www.youtube.com/watch?v=GYygtVolViM&index=23&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J) about media queries.
//
// # Reading
// Please read these quick articles to prepare for an exercise using pair programming:
//
// 1. http://www.wikihow.com/Pair-Program
// 2. https://www.thoughtworks.com/insights/blog/10-ways-improve-your-pairing-experience
//
//
// # Hungry for More
//
// ## forEach
//
// ### New! Try it out - maybe do some research
//
hopper = {start: 10, end: 6, location: "remote", type: "wdi"};
//
// 1. Use the `hopper` **object** to console log each value in the object.
//
// 2. Using the `hopper` object, console log both the key and value.
//

//// ==============================================
// SOLUTION:
console.log("SOLUTION: Hungry for More - forEach")

Object.keys(hopper).forEach(function(key){
    console.log(hopper[key]);
});

console.log("/////////////////////////");

Object.keys(hopper).forEach(function(key){
    console.log("key: " + key + " - value: " + hopper[key]);
});

console.log("==============================================")
// ==============================================

// ## reduce
//
// 1. Return a single array.
// ```
arr = [[8, 8], ["eight", "eight"], ["ate"]];
// ```
//// ==============================================
// SOLUTION:
console.log("SOLUTION: Hungry for More - reduce")

new_value = arr.reduce(function(a, b){
	return a.concat(b)
});
console.log(new_value);

console.log("==============================================")
// ==============================================

// ## chaining
//
// ```
var stocks = [
    { symbol: "XFX", price: 240.22, volume: 23432 },
    { symbol: "TNZ", price: 332.19, volume: 234 },
    { symbol: "JXJ", price: 120.22, volume: 5323 }
];
// ```
//
// Use the `stocks` array of objects for the following:
// 1. create a new variable called `filteredStockSymbols` to create new array that only contains the objects with a price above 150 (hint: use `filter`).
// 2. use the iterator pipeline (chaining) to make filteredStockSymbols contain only the stock symbol of these filtered objects (hint: use `map`).
// 3. continue using the pipeline and console log each of the symbols from the filteredStockSymbol array.
//
// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 12 - Worked on Hungry for More"
// <hr>

//// ==============================================
// SOLUTION:
console.log("SOLUTION: Hungry for More - chaining")

// 1.
var filteredStockSymbols = stocks.filter(function(stock) {
    return stock.price >= 150.00;
});

// 2.
var filteredStockSymbols = stocks.filter(function(stock) {
    return stock.price >= 150.00;
}).map(function(stock) {
    return stock.symbol;
});

//3.
var filteredStockSymbols = stocks.filter(function(stock) {
    return stock.price >= 150.00;
}).map(function(stock) {
    return stock.symbol;
}).forEach(function(symbol) {
    console.log(symbol);
});

console.log("==============================================")
// ==============================================
