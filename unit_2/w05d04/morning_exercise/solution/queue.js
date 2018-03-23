"use strict";

var queue = {

  myQueue: [],
  add: function(number){
    this.myQueue.push(number);
    return number;
  },
  remove: function() {
    return this.myQueue.shift();
  },
  peek: function() {
    return this.myQueue[0];
  }

};

module.exports = queue;
