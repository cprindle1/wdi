// console.log(Math.sqrt(Math.PI));
// console.log(Math.pow(5,4));
// console.log(Math.floor(Math.random()*11)+2);
//
// var checkForLetterA = function(letter) {
//   if(letter=='A'){
//     return true;
//   }
//   return false;
// }
//
// var checkArrayOfLetters = function(arr){
//     for(var i=0; i<arr.length; i++){
//       console.log(checkForLetterA(arr[i]));
//     }
// }
// checkArrayOfLetters(["A","B","C","A"]);


var perfectSquare = function(number){
  if((Math.sqrt(number)%2)==0 && number%2==0){
    return true;
  }else{
    return false;
  }
}

var logNumbers = function(limit){
  for(i=0; i<=limit; i++){
    console.log(perfectSquare(i));
  }
}

logNumbers(100);
