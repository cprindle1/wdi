// var arr = [];
//
// var faveFoods = ["avocados", "popcorn", "tacos"];
//
// console.log(faveFoods);

// var items = ["chair", "table", "candle", "map"];
//
// console.log(items.length);

// var kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];
//
// for (i = 0; i < kitchenSink.length; i += 2) {
//     console.log("This is in my sink: " + kitchenSink[i]);
// };

// var drSeuss = ["Cat in the Hat", "Sam I am", "Grinch",
//               "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];
//
// for (var i = 1; i < drSeuss.length; i += 2) {
//     console.log(drSeuss[i]);
//     console.log(i);
// };


//
// var foodSelections = ["pizza", "apple", "seaweed", "artichoke", "tea", "ice cream"];
//
// for (i = 0; i < foodSelections.length; i ++) {
//     if (i % 2 === 0 || i === 5) {
//         console.log(foodSelections[i]);
//     }
// };


// var looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety",
// "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];
//
// for (i = 0; i < looneyTunesChars.length; i ++) {
//   if (i % 2 === 0 || i === 3) {
//     console.log(looneyTunesChars[i]);
//   }
// };


// var veggies = ["red pepper", "leek", "pumpkin", "cauliflower"];
//
// console.log(veggies[1]);
//
// veggies[1] = "spinach"
//
// console.log(veggies[1]);
//
// console.log(veggies);


// var numbers = [21, 18, 5, 3, 2, 1, 1];
//
// numbers[2] = null;
//
// numbers[0] *= 10;
//
// console.log(numbers)

// var fruit = ["apple", "oranges", "banana", "grapes", "cherries", "blueberries", "kiwi"];
//
// // console.log(fruit.indexOf("cherries"));
//
// console.log(fruit.reverse());
//
// console.log(fruit);
//
// fruit.reverse();



// var nums = [1, 2, 3];
// nums[10] = 10;
//
// console.log(nums);

// var beatles = ["George", "John","Ringo"];
//
// beatles.push("Paul");
//
// console.log(beatles);


var favoriteShows = ["Game of Thrones", "Peaky Blinders"];

favoriteShows.push("House of Cards");

// console.log(favoriteShows);

sortedShows = favoriteShows;
sortedShows.sort();

// console.log(sortedShows);

sortedShows.push("Sharknado");

// console.log(sortedShows);

var reversedShows = sortedShows.reverse();

// console.log(reversedShows);

// reversedShows.pop();
// console.log(reversedShows);

// reversedShows.shift();
// console.log(reversedShows);

// reversedShows.unshift("Breaking Bad");
// console.log(reversedShows);

// reversedShows.splice(2, 0, "Bridezilla");
// console.log(reversedShows);
//
// reversedShows.splice(2, 1);
// console.log(reversedShows);

// console.log("++++++++++++++++++++++");
//
// slicedArray = reversedShows.slice(1, 4);
// console.log(slicedArray);

// console.log(reversedShows);
// console.log("++++++++++++++++++++++");
// console.log(reversedShows.unshift("Bridezilla", "Bobby's World"));


// var list = ["chair", "table", "candle", "map", "magnifying glass", "rupees"];
//
// console.log(list[list.length -1]);

// var sheep = ['Merino', 'Romney', 'Faulkand'];
// var num = 1 + 1;
//
// console.log(sheep[num]);
// => "Faulkland"

//
// var runDMC = ["Run", "DMC", "Jam MasterJay"];
//
// console.log(runDMC[Math.round(Math.random() * (runDMC.length - 1))]);




// var pairs = [["Snoopy", "Linus"], ["Peppermint Patty", "Woodstock"]];
//
// console.log(pairs[1][0]);


// var confectionary = [["mounds", "almond joy"], ["lindt truffles", "easter egg"]];
//
// confectionary[1][0] = "musketeer";
//
// console.log(confectionary);

var whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", "Baked Goods", "Waldo"]];

// Access Waldo
console.log(whereIsWaldo[3][2]);

// Access Jacc
console.log(whereIsWaldo[2][1]);

// Change "Baked Goods" to "No One"
whereIsWaldo[3][1] = "No One";
