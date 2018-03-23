var printGreeting = function(name){
  return("Hello there, "+name);
}

console.log(printGreeting("charlie"));

var reverseWord = function(word){
  return(word.split("").reverse().join(""));
}

console.log(reverseWord("charlie"));

var calculate = function(num1, num2, operation){
  if(operation=="add"){
    return(num1+num2);
  }else if(operation=="sub"){
    return(num1-num2);
  }else if(operation=="mult"){
    return(num1*num2);
  }else if(operation=="div"){
    return(num1/num2);
  }else if(operation=="exp"){
    return(Math.pow(num1,num2));
  }else{
    console.log("You did not sepcify a valid operation");
    return(null);
  }
}

console.log(calculate(4,3,"exp"));

var pandigital = function(number){
  var check = number.toString().split("").sort();
  for(var i=0; i<check.length; i++){
    if(check[i]!=i+1){
      return("Not Pandigital");
    }
  }
  return("Pandigital");
}

console.log(pandigital(13342));
console.log(pandigital(13542));
