<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> w02d03_homework
// console.log("tamogatchi.js is connected");

// var tamogatchi1 = {
//   name: "Simon",
//   creatureType: "Dragon",
//   foodInTummy: 10,
//   restedness: 10,
//   health: 10,
//   cry: function() {
//     this.foodInTummy--;
//     console.log("Waaaaaaa!");
//     console.log(this.name + " has current food in tummy: " + this.foodInTummy);
//   },
//   puke: function() {
//     this.health--;
//     console.log("Bleh :o~");
//     console.log(this.name + " has current health " + this.health);
//   },
//   yawn: function(){
//     console.log("Yaaaaawn. I'm tired." + --this.restedness);
//   },
//   start: function(){
//     var self = this;
//
//     var hungerTimer = setInterval(function(){
//       self.cry();
//     }, 3000);
//
//     var yawnTimer = setInterval(function(){
//       self.yawn();
//     }, 10000);
//
//     var pukeTimer = setInterval(function(){
//       self.puke();
//     }, 2000);
//   }
// };
//
// // tamogatchi1.start();
//
// var player = {
//   name: "Neo",
//   feedTamogatchi: function(food){
//     tamogatchi1.foodInTummy++;
//     console.log("Yum! " + tamogatchi1.name + " has been fed " + food + " and now has " + tamogatchi1.foodInTummy);
//   },
//   medicateTamogatchi: function(medicine){
//     tamogatchi1.health++;
//     console.log("thanks! " + tamogatchi1.name + " has been medicated with " + medicine + " and now has " + tamogatchi1.health);
//   },
//   knockOutTamogatchi: function(){
//     tamogatchi1.restedness++;
//     console.log("BONK! " + tamogatchi1.name + " has been knocked out and now has " + tamogatchi1.restedness);
//   }
// };

// var hungerTimer = setInterval(function(){
//   tamogatchi1.cry();
//   if (tamogatchi1.foodInTummy <=7){
//     clearInterval(hungerTimer);
//   }
// }, 2000);

//
// pukeTimer();












// ==================================
// Higher-Order Functions

// For Loop
var numbers = [1, 2, 3, 4];
var newNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//   newNumbers[i] = numbers[i] * 2;
// }

// console.log(newNumbers);

// Map
var numbers = [1, 2, 3, 4];
//
var newNumbers = numbers.map(function(num){
  return num * 2;
});
// console.log(newNumbers);
//
// newNumbers = newNumbers.map(function(num){
//   return num + 1;
// })
// console.log(newNumbers);

// var names = ["Stanly", "An", "Kristyn", "Jim"];
//
// var namesWithS = names.map(function(name){
//   return name + "s";
// });
//
// console.log(namesWithS);

// FILTER
// var numbers = [1, 2, 3, 4];
//
// var oddNumbers = numbers.filter(function(num){
//   return (num % 2 !== 0);
// }).map(function(num){
//   return num * 2;
// });
// console.log(oddNumbers);


// REDUCE

// initialValue = 9;
var numbers = [1, 2, 3, 4];
//
// var sum = numbers.reduce(function(a, b){
//   console.log("a is: " + a);
//   console.log("b is: " + b);
//   console.log("a + b = "  + (a + b));
//   console.log("====================");
//   return a + b;
// }, initialValue);
//
// console.log(sum);

// FOR EACH

var numbers = [1, 2, 3, 4];

oddNumbers = numbers.filter(function(num){
  return (num % 2 !== 0)
}).forEach(function(num){
  console.log(num);
})
<<<<<<< HEAD
=======
=======
console.log("tamogatchi.js is connected");
>>>>>>> f01536c9b5c8be1fdefe199bc26e0de22afe3f3f
>>>>>>> w02d03_homework
