//Control Flow
//1. Loops, Conditionals, Functions.  Loops are repeaing blocks of code which can be iterated multiple times.  A for loop is an example.  Conditionals such as if, if else, else are used to test conditions and run sections of code based on those conditions.  A function is a block of code that will be executed when called upon.

//2. An argument is a value passed to a function.  It can be string, number, array, etc.  A parameter is listed in the function definition.  It's value is passed to the function by an argument.

//3. a console.log only prints output to the console.  a return passes a value back to where the function was called.  It can be output to the console from there or stored in a variable for other use.

var checkPalindrome =function(str){
  var reversed=str.split("").reverse().join("").toLowerCase();
  return(reversed==str.toLowerCase());
}
console.log(checkPalindrome("Charlie"));

var sumDigits = function(num){
  var sum=0;
  var digits=num.toString().split("");
  for(var i=0; i<digits.length; i++){
    sum+=parseInt(digits[i]);
  }
  return sum;
}
console.log(sumDigits(42));

var checkPrime = function(number){
  for(var i=2; i<Math.sqrt(number); i++){
    if(number%i==0){
      return false;
    }
  }
  return true;
}

console.log(checkPrime(12));

var insertDash = function(number){
  var numArr=number.toString().split("");
  var splices=[];
    for(var i=1; i<numArr.length; i++){
      if(numArr[i]%2!=0 && numArr[i-1]%2!=0){
        splices.push(i);
      }
    }
  for(var i=0; i<splices.length; i++){
    numArr.splice(splices[i]+i,0,"-");
  }
    return numArr.join("");
}

console.log(insertDash(454793));


var calculateSide = function(sideA, sideB){
  return(Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2)));
}

console.log(calculateSide(8,6))

var sumArray = function(arr){
  var sum=0;
  for(var i=0; i<arr.length; i++){
    sum+=arr[i];
  }
  return sum;
}

console.log(sumArray([1,2,3,4,5,6]));


var insertDash = function(number){
  var numArr=number.toString().split("");
    for(var i=1; i<numArr.length; i++){
      if(numArr[i]%2!=0 && numArr[i-1]%2!=0){
        numArr.splice(i,0,"-");
        i++;
      }
    }
  return numArr.join("");
}

console.log(insertDash(454793));
