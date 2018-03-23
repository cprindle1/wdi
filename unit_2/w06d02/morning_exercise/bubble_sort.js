var unsortedArray = [10, 0, 99, 100, 8, 55, 2, 17, 16, 15, 1000, 1];

var bubbleSort = function(unsortedArray){
    // var sorted=false;
    var changed = true;
    // if(unsortedArray.length<2){
    //   sorted=true;
    // }
    while(changed) {
      changed=false;
        for (var i=0; i < unsortedArray.length-1; i++) {
          if (unsortedArray[i] > unsortedArray[i+1]) {
            var tempNum = unsortedArray[i];
              unsortedArray[i] = unsortedArray[i+1];
              unsortedArray[i+1] = tempNum;
              changed = true;
            }
            // else if(i == unsortedArray.length-1 && !changed){
            //   sorted=true;
            // }
        }
    }
    return(unsortedArray);
}

console.log(bubbleSort(unsortedArray));
