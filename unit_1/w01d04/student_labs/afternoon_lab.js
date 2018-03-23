var printCool = function(name){
  return(name+" is cool");
}

console.log(printCool("Charlie"));

var calculateCube =function(num){
  return(Math.pow(num,3));
}

console.log(calculateCube(5));

var isAVowel = function(char){
  var vowels=["a","A","E","e","I","i","O","o","U","u"];
  for(var i=0; i<vowels.length; i++){
    if(char==vowels[i]){
      return true;
    }
  }
  return false;
}

console.log(isAVowel("B"));

var getTwoLengths = function(param1, param2){
  var arr=[param1.length, param2.length];
    return(arr);
}

console.log(getTwoLengths("charlie", "prindle"));

var getMultipleLengths = function(arr){
  var nums=[];
  for(var i=0; i<arr.length; i++){
    nums.push(arr[i].length);
  }
  return nums;
}

console.log(getMultipleLengths(["charlie", "prindle", "brian", "aiden"]));

var maxOfThree = function(num1, num2, num3){
  return(Math.max(num1, num2, num3));
}

console.log(maxOfThree(1,2,3));

var printLongestWord = function(arr){
  var longest=0;
  var longest_index=0;
  for(var i=0; i<arr.length; i++){
    if(arr[i].length>longest){
      longest=arr[i].length;
      longest_index=i;
    }
  }
  return(arr[longest_index]);
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

var transmogrify = function(num1, num2, num3){
  return(Math.pow((num1*num2),num3));
}

console.log(transmogrify(5,3,2));

var fibEvens = function(num){
var fib1=1;
var fib2=2;
var tempFib=0;
var sumFib=2;
var fibNum=0;

while(fibNum<=num){
  fibNum=(fib1+fib2);
  tempFib=fib2;
  fib2=fib1+fib2;
  fib1=tempFib;
  if(fibNum%2==0){
    sumFib+=fibNum;
  }
}
return sumFib;
}
console.log(fibEvens(4000000));
