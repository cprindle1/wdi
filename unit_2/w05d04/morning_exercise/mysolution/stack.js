"use strict";

var stack = {
  // Write your code here
  myStack: [],
  add: function(item){
    this.myStack.push(item);
    return item;
  },
  remove: function(){
    var removal = this.myStack[this.myStack.length-1];
    this.myStack.pop();
    return(removal);
  },
  peek: function(){
    return(this.myStack[this.myStack.length-1])
  }
}

module.exports = stack;
