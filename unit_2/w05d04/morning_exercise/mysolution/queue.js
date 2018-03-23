"use strict";

var queue = {
<<<<<<< HEAD
  //Write your code here
  myQueue: [],
  add: function(item){
    this.myQueue.push(item);
    return item;
  },
  remove: function(){
    var removal = this.myQueue[0];
    this.myQueue.shift();
    return(removal);
  },
  peek: function(){
    return(this.myQueue[0])
  }
=======

  // Write code here
>>>>>>> 36dbb154407380ea8dea6cc103f68cba01255576
};


module.exports = queue;
