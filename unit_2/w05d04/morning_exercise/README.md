![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

---
Title: Stacks & Queues & TDD with Mocha<br>
Type: Morning Exercise<br>
Original Creator: Kristyn Bryan <br>
    Course: WDIR-Hopper<br>
Competencies: TDD, CS, JavaScript

---

# Stacks, Queues & TDD with Mocha

## Setup

1. Make sure that you have the most up-to-date materials for this morning's exercise:
`git pull upstream master`.

2. Navigate to the directory for today, go into the `morning_exercise` directory.

3. Run `npm install` -- this will download any assignment-specific JavaScript
dependencies into the `node_modules` directory. Note: We'll be using a testing suite called (Mocha)[https://www.npmjs.com/package/mocha].

4. You will use the files `stack.js` and `queue.js` that is provided for you to write your code (the test suite is looking to run tests on these files).

5. Run `npm test` in your terminal (you must be inside the root folder for this morning `morning_exercise`) to see if the tests pass or fail.

## Instructions
In this morning exercise, you will be doing three things:<br>
1) Making a stack<br>
2) Making a queue<br>
3) Passing tests

- Ultimately, you will be writing code to pass tests. This means, each time you write a line of code, run the test to see if it passes (more instructions below).

- After you run the code and read the error messages, you should see a few things. Take note of the specific names for the functions. Using these specific names will help you pass tests.

## The Problems

You are going to write code to create the following objects:

<hr>

![](http://farm3.static.flickr.com/2249/2214149648_5a980d4c26_o.jpg)

## Stack

A stack is an object that is last in first out (LIFO). You can only add to the top of the stack, and you can only get the last thing added.

It should also hold onto a storage variable called `myStack`. 

Your stack should have the following **methods**:

1. **add**: adds an element to the top of the stack. It should also return the element.
2. **remove**: removes and returns the item on the top of the stack.
3. **peek**: returns, but does not remove, the item on the top of the stack.

<hr>

![dogs in a queue](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpWZrtN_8ImrIRfs_Fb8QeZHSePyiAcYUu7FNULKpbqJEXlPEsIg)

## Queue

Queue is very similar to the stack, except that it is first in first out (FIFO). You can only add to the end of the queue, and retrieve items from the front of the queue.

It should also hold onto a storage variable called `myQueue`.

A queue should have the following **methods**:

1. **add**: adds an element to the back of the queue. Returns the element.
2. **remove**: removes and returns the element at the front of the queue.
3. **peek**: returns, but does not remove, the item at the front of the queue.

## Testing Your Work

- A set of automated tests, written in the [Mocha.js](https://mochajs.org/) testing framework, has been provided for you with this assignment.

- To run these tests, navigate to the `morning_exercise` directory and type `npm test` into the console.

ADD PICTURE

## Am I Doing it Right?

**This is WRONG**<br>
You will get an NPM error message if you are *in the wrong folder* when you run `npm test`

Example:
![tdd-incorrect](https://i.imgur.com/Kskcwsl.png)

**This is RIGHT**<br>
You want to see a screen with sentences that give you details about what needs to be done to pass the test.

Example:
![tdd-correct](https://i.imgur.com/Padyz6z.png)

**Keep Passing Tests**
After you write each method, run `npm test`.

Read the feedback from the tests carefully -- it will give you a clue about what to do next.

![passing tests](https://i.imgur.com/o8rYrYA.png)

# Hungry for More?

- Check out the tests inside the `spec` folder. Try to add an additional test to the stack or queue or start another unit test of your own. 

Read the documentation for help with this: [Mocha.js](https://mochajs.org/)
