var rotX = function(inputString, rotations){
  var cipherString = "";
  // inputString=inputString.toLowerCase();
  for(var i=0; i<inputString.length; i++){
    if(inputString[i].charCodeAt(0)==32){
      cipherString+=' ';
    }else if(inputString[i].charCodeAt(0)+rotations<=122 && inputString[i].charCodeAt(0)>=97 || inputString[i].charCodeAt(0)+rotations<=90 && inputString[i].charCodeAt(0)>=65){
      cipherString+=String.fromCharCode(inputString[i].charCodeAt(0)+rotations);
    }else{
      cipherString+=String.fromCharCode(inputString[i].charCodeAt(0)+rotations-26);
    }
  }
  return cipherString;
}

console.log(rotX("Hello World", 22));
