var clock = function(hour, minute){
  var angle1=0;
  var angle2=0;
  if(hour>12 || minute>59 || hour <1 || minute <0){
    return('out of range');
  }else{
      angle1 = (hour*30)+(30*(minute/60));
      if(angle1>360){
        angle1-=360;
      }
      angle2 = (minute*6);
      return([Math.abs(angle2-angle1), 360-Math.abs(angle1-angle2)]);
  }
}
console.log(clock(6, 00));
console.log(clock(12, 00));
console.log(clock(12, 15));
console.log(clock(9, 45));
console.log(clock(1, 59));
console.log(clock(500, 34));
