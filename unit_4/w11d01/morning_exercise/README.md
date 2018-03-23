![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Stacks & Queues with RSpec <br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: Alex Deschamps for WDI-Archer<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Hopper<br>
Competencies: Problem solving with Ruby and testing with RSpec<br>
Prerequisites: Ruby <br>

---


# Stacks, Queues, and TDD

We're going to practice writing a stack and queue in Ruby. In addition to this, we are going use [RSpec](http://rspec.info/documentation/) to test our code against some pre-written tests. We're going to adjust our code until we pass the tests.

## Setup
We are going to use a testing suite in ruby called `rspec`. In order to use rspec, you must first install it.

1. Navigate into your `morning_exercise` folder.

2. Install `rspec`
``` bash
  $ gem install rspec
```

## How to Run RSpec

- Navigate *inside the root directory of your program* (in our case today, this should be the morning_exercise folder).

- use the `rspec` command in our terminal to test our application.

### Am I doing it right?

>RSpec knows to look for a folder with a `spec` in the name in order to run test files.

#### Doing it Wrong

If you are running `rspec` in a folder that **doesn't** contain  a `spec` folder, you will receive a message like this:

![error](https://i.imgur.com/6iUCioU.png)

*Notice that it says "0 examples"*

#### Doing it Right

If you are running `rspec` in a folder that **does** contain  a `spec` folder, you will receive a message like this:

![successful message](https://i.imgur.com/r4xoNy2.png)

## What's happening?

These tests are expecting two files inside of the morning_exercise folder:

  1) stack.rb<br>

  2) queue.rb.

Make sure to work inside of these files so that the tests run properly.

Take a look at the "failures" that are in your terminal. These should guide you to write your code.

## Remember to Test

Run `rspec` in your terminal, write code to pass one test, run `rspec` again. Run this test after you finish each method.

<hr>

# Activty

Make the following two data types - a stack and a queue and get your code to pass the tests.

### Steps to take

1) Run our code and watch it fail.

2) Write code that will pass one of the tests.

3) Run our code again and get a test to pass!

4) Repeat, focus on one test at a time, until all tests are passed.

## A Stack

![](http://farm3.static.flickr.com/2249/2214149648_5a980d4c26_o.jpg)

A stack is an object that is last in first out (LIFO). You can only add to the top of the stack, and you can only get the last thing added.

It should also hold onto a storage variable that cannot be accessed outside of the object, but only in the methods. It should have the following methods:

* add: adds an element to the top of the stack

* remove: removes and returns the item on the top of the stack.

* peek: returns, but does not remove, the item on the top of the stack.


## A Queue

![dogs in a queue](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpWZrtN_8ImrIRfs_Fb8QeZHSePyiAcYUu7FNULKpbqJEXlPEsIg)

Queue is very similar to the stack, except that it is first in first out (FIFO). You can only add to the end of the queue, and retrieve items from the front of the queue.

It should also hold onto a storage variable that cannot be accessed outside of the object, but only in the methods. It should have the following methods:

* add: adds an element to the back of the queue.

* remove: removes and returns the element at the front of the queue.

* peek: returns, but does not remove, the item at the front of the queue.

### Success!

You will know that your tests are successful when you receive a message that tells you that there are 0 failures. It looks like this:
```
..........

Finished in 0.0062 seconds (files took 0.32867 seconds to load)
10 examples, 0 failures
```

If you finished early, read/watch more about RSpec TDD: http://rspec.info/
