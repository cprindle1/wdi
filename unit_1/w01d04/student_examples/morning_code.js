// var name = ["c","h","a","r","l","i","e"];
//
// console.log(name.reverse());
//
// var name2="charlie";
//
// console.log(name.toString());
//
// console.log(name.toString().split(","));

// var printBoo = function(){
//   console.log('Boo!');
// }
//
// printBoo();
//
// var printParam = function(param){
//   console.log(param);
// }
//
// printParam("charlie");
//
// var minusOne = function(number){
//   console.log(number-1);
// }
//
// minusOne(5);
//
// var printElement = function(param){
//   console.log(param[param.length-1]);
// }
//
// printElement([1,2,3,4,5,]);

var calculateArea = function(width, length){
  return(width*length);
}

console.log(calculateArea(2,2));
console.log(calculateArea(2,3));

var convertnums = function(n1, n2, n3){
  return((n1+n2+n3).toString());
}

console.log(convertnums(1,2,3));

var sameStrings = function(string1, string2){
  console.log(string1);
  console.log(string2);
  console.log(string1==string2);
}

sameStrings("charlie", "charles", "chuck");
