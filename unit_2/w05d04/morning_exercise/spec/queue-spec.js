//Created by Kristyn Bryan WDIR-Hopper 2017.

"use strict";

// 'require' external code //
var assert = require('assert');

// Responses
var queue = require('../queue.js');

var add = queue.add;
var remove = queue.remove;
var peek = queue.peek;

// Tests
describe('queue', function() {
  var item1 = 'taco';
  var item2 = 'bell';
  var result;

  before(function() {
    queue.add(item1);
  });

  describe("#add()", function() {
    it("should be a function (method) inside the `queue` object", function(){
      assert.equal(typeof queue.add, 'function');
    });

    describe('when called with 1 argument', function() {

      before(function() {
        result = queue.add(item2);
      });

      it('adds the item to the back of the queue', function() {
        assert.equal(queue.myQueue[queue.myQueue.length-1], item2);
      });

      it('returns the added item', function() {
        assert.equal(result, item2);
      });
    });
  });

  describe('#peek()', function() {
    it("should be a function (method) inside the `queue` object", function(){
      assert.equal(typeof queue.peek, 'function');
    });
    describe('when called', function() {
      before(function() {
        result = queue.peek();
      });

      it('returns the item at the front of the queue', function() {
        assert.equal(result, item1);
      });
    });
  });

  describe("#remove()", function() {
    it("should be a function (method) inside the `queue` object", function(){
      assert.equal(typeof queue.remove, 'function');
    });

    describe('when called', function() {
      before(function() {
        result = queue.remove();
      });

      it('returns the item that was at the front of the queue', function() {
        assert.equal(result, item1);
      });

      it('removes the front item from the queue', function() {
        assert.equal(queue.peek(), item2);
      });
    });
  });
});

// Add - Unit Test
// describe("queue's #add()", function() {
//   it("should be a function (method) inside the `queue` object", function(){
//     assert.equal(typeof queue.add, 'function');
//   });
//
//   describe('when called with 1 argument', function() {
//     var item = 21;
//     var result;
//
//     before(function() {
//       result = queue.add(item);
//     });
//
//     it('adds the item to the back of the queue', function() {
//       assert.equal(queue.myQueue[queue.myQueue.length-1], item);
//     });
//
//     it('returns the added item', function() {
//       assert.equal(result, item);
//     });
//   });
// });
//
// // Peek - Unit Test
// describe("queue's #peek()", function() {
//   it("should be a function (method) inside the `queue` object", function(){
//     assert.equal(typeof queue.peek, 'function');
//   });
//
//   describe('when called', function() {
//     var item1 = 7;
//     var item2 = 14;
//     var result;
//
//     before(function() {
//       queue.add(item1);
//       queue.add(item2);
//       result = queue.peek();
//     });
//
//     it('returns the front item on the queue', function() {
//       assert.equal(result, item1);
//     });
//   });
// });
//
// // Remove - Unit Test
// describe("queue's #remove()", function() {
//   it("should be a function (method) inside the `queue` object", function(){
//     assert.equal(typeof queue.remove, 'function');
//   });
//
//   describe('when called', function() {
//     var item1 = 11;
//     var item2 = 99;
//     var result;
//
//     before(function() {
//       queue.add(item1);
//       queue.add(item2);
//       result = queue.remove();
//     });
//
//     it('returns the item that was at the front of the queue', function() {
//       assert.equal(result, item2);
//     });
//
//     it('removes the front item from the queue', function() {
//       assert.equal(queue.peek(), item1);
//     });
//   });
// });
