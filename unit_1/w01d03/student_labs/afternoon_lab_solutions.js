// Write the answers to your lab in this file.

// Remember to run each one in the terminal to check that they are correct `node afternoon_lab_solutions.js`.

// Comment out the code once it is correct!
var quotes = ["Hello", "Hi", "Howdy"];

var randomThings = [1, 10, "Hello", true];
randomThings[0];
randomThings[2]="World";
console.log(randomThings[2]);

var ourClass = ["Hopper", "Zoom", "Github", "Slack"];
ourClass[2];
ourClass[ourClass.indexOf("Github")]="Octocat";
console.log(ourClass);
ourClass.push("Cloud City");
console.log(ourClass);

var myArray = [5 ,10 ,500, 20]
myArray.push("Egon");
myArray.pop();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.splice(0,1);
console.log(myArray);
myArray.reverse();
console.log(myArray);

var number=101;
if(number<100){
  console.log("little number");
}else{
  console.log("big number");
}
number=8;
if(number<5){
  console.log("little number");
}else if(number>10){
  console.log("big number");
}else{
  console.log("monkey");
}

var kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
var thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log("Kristyn is rocking that "+kristynsCloset[2]+" today!");
var kristynShoe=kristynsCloset.splice(0,1);
console.log(kristynShoe);
console.log(kristynsCloset);
kristynsCloset.splice(5,0,"raybans");
console.log(kristynsCloset);
kristynsCloset[4]="stained knit hat";
console.log(kristynsCloset);
var shirt=thomsCloset[0][0];
var pants=thomsCloset[1][0];
var accessory=thomsCloset[2][0];
console.log("Thom is looking fierce in a "+shirt+", "+pants+" and "+accessory+"!");

thomsCloset[2][2]="Footie Pajamas";
console.log(thomsCloset);
