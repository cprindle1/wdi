/////////////////////////////////////////////////////////
//PALINDROME
/////////////////////////////////////////////////////////

var checkPalindrome = function (word){
  //take word split it and reverse it (reverse array method only), return to string
  var reversedWord = word.split('').reverse().join('');

  // console.log(word, reversedWord);// still need to lower case in here so that case does not matter

 //return boolean expression (will be true or false)
  return reversedWord.toLowerCase() === word.toLowerCase();
}

// console.log(checkPalindrome('Radar'));
// console.log(checkPalindrome('Borscht'));


/////////////////////////////////////////////////////////
//Sum Digits
/////////////////////////////////////////////////////////
var sumDigits= function(num){
  var sum = 0;
  var numToString = num.toString();
  for (var i = 0; i < numToString.length; i++){
    sum +=  parseInt(numToString[i]);
  }
  return sum;
}

// console.log(sumDigits(42));


/////////////////////////////////////////////////////////
//Prime Numbers Part 1 and Part 2
/////////////////////////////////////////////////////////
var checkPrime = function (num){
 // prime is any number greater than 1, but also, not 2
 if (num < 2 ){ return false }

 //see if the number is evenly divisble by any other number (NOT including 1)
 for (var i = 2 ; i  < Math.sqrt(num); i++ ){
   if (num % i === 0){ return false } //get out of the loop and function if false
 }
  //made it out of the loop?
  return true;

}
// console.log(checkPrime(11));


//console log prime numbers up to number entered
var printPrimes = function (limit){
  //start at 1, (could start at 3)
  for (var i = 1; i <= limit; i++ ){
    if(checkPrime(i)){ console.log(i) }
  }
}

//printPrimes(97);

/////////////////////////////////////////////////////////
//Insert Dash
/////////////////////////////////////////////////////////
var insertDash = function (num){
  //need to convert number to a string to split up the digits
  var numToString = num.toString();
  //loop over the digits
  for (var i = 0; i < numToString.length-1; i++){
    //just match 1,3,5,7, or 9 (as strings)
    var oddNumberRegEx = /[13579]/;
    //check adjacent numbers
    if (numToString[i].match(oddNumberRegEx) && numToString[i+1].match(oddNumberRegEx)){
      //splice in a dash, splice is array method, must convert to array
      numAddDash = numToString.split('');
      //insert dash in correct place
      numAddDash.splice(i+1, 0, '-');
      //return to string, rewrite numToString variable
      numToString = numAddDash.join('');
    }
  }
  //check the before and after, if both odd, stuff a dash in between
 console.log(numToString)

}

// insertDash(77777099003455)

/////////////////////////////////////////////////////////
//Pythagoras
/////////////////////////////////////////////////////////

// A^2 + B^2 = C^2
// Square root of (A^2 + B^2) = C
// This function solves for C

var calculateSide = function (sideA, sideB){
  return Math.sqrt((Math.pow(sideA, 2) + Math.pow(sideB, 2)))
}

//console.log (calculateSide(8,6))

/////////////////////////////////////////////////////////
//Sum Array
/////////////////////////////////////////////////////////
var sumArray = function (arr){
 sum =  arr.reduce(function (a,b){
    return a + b;
  });
  return sum;
}

//console.log (sumArray([2,3,4,5,6,7,8,9,10,1])) //55
