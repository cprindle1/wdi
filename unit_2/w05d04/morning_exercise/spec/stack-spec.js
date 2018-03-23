//Created by Kristyn Bryan WDIR-Hopper 2017.

"use strict";

// 'require' external code //
var assert = require('assert');

// Responses
var stack = require('../stack.js');

var add = stack.add;
var remove = stack.remove;
var peek = stack.peek;

// Tests

describe('stack', function() {
  var item1 = 'pizza';
  var item2 = 'hut';
  var result;

  before(function() {
    stack.add(item1);
  });

  describe("#add()", function() {
    it("should be a function (method) inside the `stack` object", function(){
      assert.equal(typeof stack.add, 'function');
    });

    describe('when called with 1 argument', function() {

      before(function() {
        result = stack.add(item2);
      });

      it('adds the item to the top of the stack', function() {
        assert.equal(stack.myStack[stack.myStack.length-1], item2);
      });

      it('returns the added item', function() {
        assert.equal(result, item2);
      });
    });
  });

  describe("#peek()", function() {
    it("should be a function (method) inside the `stack` object", function(){
      assert.equal(typeof stack.peek, 'function');
    });

    describe('when called', function() {
      before(function() {
        result = stack.peek();
      });

      it('returns the top item on the stack', function() {
        assert.equal(result, item2);
      });
    });
  });


  describe("#remove()", function() {
    it("should be a function (method) inside the `stack` object", function(){
      assert.equal(typeof stack.remove, 'function');
    });

    describe('when called', function() {
      before(function() {
        result = stack.remove();
      });

      it('returns the item that was on the top of the stack', function() {
        assert.equal(result, item2);
      });

      it('removes the top item from the stack', function() {
        assert.equal(stack.peek(), item1);
      });
    });
  });
});
