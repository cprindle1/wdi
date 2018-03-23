//Easy Going
//1. Write a for loop that will log the numbers 1 through 20.
for(var i=1; i<=20; i++){
  console.log(i);
}
//Get even
//1.Write a for loop that will log only the even numbers in 0 through 200. >Hint: Think about the increment expression.

for(var i=0; i<=200; i+=2){
  console.log(i);
}
//Triangles
//1. Write a loop that console logs a right isoscelese triangle made of '#' that has the height and length of the argument.
var triangle="";
var arg=7;
for(var i=0; i<arg; i++){
    triangle+="#";
    console.log(triangle);
}
arg=6;
triangle="";
for(var i=0; i<arg; i++){
  triangle+="#";
}
for(var i=arg; i>=0; i--){
    console.log(triangle);
    triangle=triangle.slice(0,-1);
}

for(var i=1; i<=100; i++){
  if(i%3==0 && i%5==0){
    console.log("FizzBuzz");
  }else if(i%3==0 && i%5!=0){
    console.log("Fizz");
  }else if(i%3!=0 && i%5==0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
}

var thom = ["Thom", 1000, "Christchurch"]
var karolin = ["Karolin", 16, "New York"]
var kristyn = ["Kristyn", 5, "Pittsburgh"]
var matt = ["Matt H", 186, "Philadelphia"]
thom[0]="Gameboy";
karolin[1]+=1;
matt[2]="Gotham City";
kristyn[2]="Brooklyn";
console.log(thom);
console.log(karolin);
console.log(kristyn);
console.log(matt);

var turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(var i=0; i<turtles.length; i++){
  console.log(turtles[i].toUpperCase());
}

var responses=["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."];
for(var i=0; i<20; i++){
  if(i%2==0){
    console.log(responses[Math.round(Math.random()*(responses.length-1))]);
  }else{
    console.log("Love me, pet me! HSSSSSS");
  }
}

var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums[Math.floor(nums.length/2)]);
var sum=0;
for(var i=0; i<1000; i++){
  if(i%3==0 || i%5==0){
    sum+=i;
  }
}
console.log(sum);

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

var kristynShoe=kristynsCloset[0];
kristynsCloset.splice(0,1);
thomsCloset[2].push(kristynShoe);
for(i=0; i<3; i++){
  console.log("Thom is looking fierce in a "+thomsCloset[0][i]+", "+thomsCloset[1][i]+" and "+thomsCloset[2][i]+"!");
  console.log("Kristyn is rocking that "+kristynsCloset[i]+" today!");
}
for(var i=0; i<kristynsCloset.length; i++){
  console.log("WHIRR: Now washing "+kristynsCloset[i]);
}

console.log(thomsCloset[0]);
console.log(thomsCloset[1]);
console.log(thomsCloset[2]);

for(var i=0; i<thomsCloset.length; i++){
  for(var j=0; j<thomsCloset[i].length;j++){
    console.log(thomsCloset[i][j]);
  }
}
