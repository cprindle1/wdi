var multiplyArray = function (ary) {
  if (ary.length == 0) { return 1; };

  var total = 1;
  // var total = ary[0];

  for (var i=0; i < ary.length; i++) {
    total = total * ary[i];
  };

  return total;
};

console.log(multiplyArray([1,2,3,4,5]));
