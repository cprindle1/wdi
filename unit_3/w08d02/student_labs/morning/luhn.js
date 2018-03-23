var validCard = function(cardNo){
  var cardNoArr=cardNo.toString();
  var sumDig=0;
  for(var i=cardNoArr.length-2; i>=0; i-=2){
    if(cardNoArr[i]*2<10){
      sumDig+=cardNoArr[i]*2;
    }else{
      sumDig+=1+(cardNoArr[i]*2)%10;
    }
  }
  for(var j=cardNoArr.length-1; j>=0; j-=2){
    sumDig+=parseInt(cardNoArr[j]);
  }
  return(sumDig%10===0);
};

console.log(validCard(1234567890123456));
console.log(validCard(4408041234567893));
console.log(validCard(38520000023237));
console.log(validCard(4222222222222));
console.log(validCard(4408041234567893));
