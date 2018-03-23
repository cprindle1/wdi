"use strict";

var stack = {

  myStack: [],
  add: function(number){
    this.myStack.push(number);
    return number;
  },
  remove: function() {
    return this.myStack.pop();
  },
  peek: function() {
    return this.myStack[this.myStack.length -1];
  }

}

module.exports = stack;
