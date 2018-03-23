![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: setInterval & Iterators<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Kristyn Bryan<br>
Topics: setInterval, callback functions, higher-order functions<br>
<hr>

### LESSON OBJECTIVES
- after this lesson, students will be able to:_
- use setInterval and clearInterval
- use a callback function
- loop through an object
- use map, filter, reduce, and forEach on arrays

<hr>

### SETUP 

* In the `student_examples` directory for today, `unit_1/w02d03/student_examples` :
* Make a _folder_ called `afternoon_lesson`
* Inside the `afternoon_lesson` directory, make two files: `index.html` and `app.js`
* Link them together with a script tag in your HTML file: `<script type="text/javascript" src="app.js"></script>`
* Write a console.log into `app.js` to confirm that your file is connected. Ex: `console.log("app.js is connected");`
* Open the `index.html` into your browser
* Check in the developer console that the console.log appears and that the files are linked together

<br>
<hr>



## setInterval (9 mins)

We're going to ignore the `player` object for a while, and just focus on bringing our Tamagotchi to life.

We are going to automate our Tamagotchi object! Let's a take a little detour:

`setInterval` is not strictly a part of OOP, but it is a useful tool to automate repeated actions in your code according to a timer.

The syntax is:

```
var timer = setInterval(callback, time);
```

We can just write the setInterval globally after our `tamagotchi1` object.
Example of a setInterval that will 'run' our Tamagotchi's hunger pangs:

```
var hungerTimer = setInterval(function() {
	tamagotchi1.cry();
}, 2000);
```



&#x1F535; **Activity (11 min)**

* Write a setInterval `hungerTimer` that will make the Tamagotchi cry every 6 seconds (6000 milliseconds)

&#x1F535; **Extra Activity I**

* Write a setInterval `yawnTimer` that will make the Tamagotchi yawn every 10 seconds

&#x1F535; **Extra Activity II**

* Write a setInterval `sickTimer` that will make the Tamagotchi puke every 25 seconds

* You can _try_ to interact with the tamagotchi by typing the player methods into the console.

&#x1F535; **Extra Activity III - Stop Time**

As it is, to stop the timers from running you will need to comment them out and refresh the page.

To stop the interval of the hungerTimer, use `clearInterval(hungerTimer)` globally.

* Write a function outside of your objects called `stopTime` that, when invoked, will stop each timer from running.



<hr>
<br>

## CONTEXT of THIS
### ENCAPSULATING setInterval within an Object

We have used setInterval to 'run' our Tamagotchi, but our setIntervals are not encapsulated in an object,  therefore our program is not entirely object-oriented.

Let's put our intervals inside out `tamagotchi1` object.

But there is a hitch! The keyword **this** will trip us up. **this** will tell us what **context** we are in. That is, what object we _belong to_ currently. But the context changes when we try to use **this** inside of our setInterval callback.

Don't worry if the following isn't clear to you. It's just a bit of extra demonstration of javascript's weirdness. 

Let's say we put a `start` method into our `tamagotchi1` object that will run the `cry` method:

```
  start: function() {
    var hungerTimer = setInterval(function() {
      this.cry();
    }, 6000);
  }
```  

We will get an error:

![](https://i.imgur.com/Rika8pt.png)

<br>

Let's check the context of `this` within our setInterval:

```
  start: function() {
    var hungerTimer = setInterval(function() {
      console.log(this);
    }, 6000);
  }
```

It gives back the `window` object, and not the `tamagotchi1` object. And `window.cry()` is of course not defined.

That's because the function that we used as a callback does not have a parent object that we have explicity defined. It will by default belong to `window`.

To rememdy this, we can **freeze the context** within our `start` method:

```
var self = this;
```

```
  start: function() {
    var self = this;
    var hungerTimer = setInterval(function() {
      self.cry();
    }, 6000);
  }
```

<br>

&#x1F535; **Activity**

* Make it so that your `tamagotchi1` object will run a `start` method that will run the `hungerTimer`, the `yawnTimer`, and the `sickTimer`.
* Hint: Freeze the context of `this` within the `start` function.

&#x1F535; **Activity**

> Extra reading: Understanding CONTEXT vs SCOPE in Javascript:

> `http://ryanmorr.com/understanding-scope-and-context-in-javascript/`


<br>

&#x1F535; **Extra activity**

FIGURE IT OUT

* Write a `stop` method inside your tamagotchi that will clear the Intervals
* Hint: Context is important. Inside the `start` method, refer to the interval functions with `this`.

```
this.hungerTimer = setInterval(function() {
  self.cry();
}, 6000);
```

When `start` is invoked, `hungerTimer` will be instantiated as a method of `tamagotchi1`. You can then refer to it using `this` inside the `stop` method.

```
clearInterval(this.hungerTimer);
```

<br>



# Callbacks & Higher Order Functions

## Functions are first class objects
In JavaScript, functions are first-class objects; that is, functions are of the type Object and they can be used in a first-class manner like any other object (String, Array, Number, etc.) since they are in fact objects themselves. They can be stored in variables, passed as arguments to functions, created within functions, and returned from functions.

What that means is that they can be used in many ways in javascript.

### Object
- A function **is** an object.
Just like other objects that we've seen, it has properties. There are some properties that we can check (.length, .name)

```
function myPerson() {};
typeof myPerson;
=> function
```
```
myPerson.favoriteColor = "yellow";
console.log(myPerson.favoriteColor);
=> yellow
```
### Variable
You can save a function to a variable just like a number or string.

`var add = function(a, b){return a + b};`

### Array
You can save a function in an array.

`var mathStuff = ["plus", 1, 2, function(a, b){return a - b}];`

You can call the function by referencing the array:
```
var mathStuff = ["plus", 1, 2, function(a, b){return a - b}];

mathStuff[3](10, 5);
```

## JavaScript Callback Functions

Because functions are first-class objects, we can pass a function as an argument in another function and later execute that passed-in function or even return it to be executed later. This is the essence of using callback functions in JavaScript

**Callback functions** are derived from a programming paradigm known as functional programming. At a fundamental level, functional programming specifies the use of functions as arguments.

**Use Named OR Anonymous Functions as Callbacks**


&#x1F535; **Code Along**
```
var tellJoke = function(laughAtJoke){
  console.log("Here's a joke...");

  laughAtJoke();
}

var laughAtJoke = function() {
  console.log("hahahha");
}

// invoke a function and pass another function as a parameter
tellJoke(laughAtJoke);
```

&#x1F34F; Fist to five! How are you feeling about callbacks?

&#x1F535; **Activity**

#### Callbacks
1. Create a variable called `responseToGreeting` and have it point to an anonymous function that logs ("I'm good, thanks for asking");
2. Create another variable called `myGreeting` and have it point to an anonymous function that takes one parameter (a callback function), and logs "Hello, how are you?".
3. Finally, within `myGreeting`, execute the callback function that is passed through argument.
4. Call `myGreeting` and pass `responseToGreeting` as an argument.

<hr>

## Iterators


### Map

**Syntax**<br>
`array.map(function(){})`

This higher-order function is like a `for loop`. The difference from a `for loop` is that it's used for **transforming** values. You enter an array and what is returned is an array, but with transformed values.

&#x1F535; **Code Along**
**For Loop**
```
var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    newNumbers[i] = numbers[i] * 2;
}

console.log("The doubled numbers are", newNumbers); // [2, 4, 6, 8]
```

You can use `map` and specify what to do to your array:

**Map**
```
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 4, 6, 8]
```

**Chain it!**
```
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.map(function(number){
    return number * 2;
}).map(function(number){
    return number + 1;
});

console.log("The doubled and incremented numbers are", newNumbers); // [3, 5, 7, 9]
```
Every number is now doubled and has 1 added to it.

**Rules for map:**
- The amount of input elements is equal to the amount of output elements. You can't give `map` 4 values, and only receive 3 back. If the _source array_ has an X amount of elements, then the _resulting array_ will also have X elements.

- Every output element corresponds to the input element in the same position; they're never shuffled around.

&#x1F34F; Fist to five! How are you feeling about map?

&#x1F535; **Activity**
1. Use the this array to do the following: `nums = [2, 4, 5, 6, 9, 10]`;<br>
2. Using `map`, divide all of the numbers in the array by 2.<br>
3. Using, `map`, subtract 1 from the new array.<br>
4. Return an array of these new numbers.

### Filter

**Syntax**<br>
`array.filter(function(){})`

If you want to do something to only parts of your array, use the filter method first.

The return value from the filter callback should be a boolean, indicating whether to include the original value in the result (true) or whether to leave it out (false). You should not return the value itself, just a boolean - you can't modify the value from within the callback. The return value just decides whether the value will be included in the result, nothing else.

&#x1F535; **Code Along**

**For loop**
```javascript
var numbers = [1, 2, 3, 4];
var oddNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        oddNumbers[i] = numbers[i];
    }
}

console.log("These are odd numbers", oddNumbers); // [1, 3]
```

**Filter**
```
var numbers = [1, 2, 3, 4];

var oddNumbers = numbers.filter(function(number){
    return (number % 2 !== 0);
});

console.log("The odd numbers are", oddNumbers); // [2, 6]
```

&#x1F535; **Activity**
1. Use the this array to do the following: `nums = [2, 4, 5, 6, 9, 10]`;
2. Using `filter`, return a new array with only the even numbers. 

**Chain it!**
What if we need to filter out data from an array and modify it? Here's how we could do it with a `for loop`. 

```
var numbers = [1, 2, 3, 4];
var newNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
```

## We can chain our higher-order functions

**Filter AND Map:**
```
var numbers = [1, 2, 3, 4];

var newNumbers = numbers.filter(function(number){
    return (number % 2 !== 0);
}).map(function(number){
    return number * 2;
});

console.log("The doubled numbers are", newNumbers); // [2, 6]
```

&#x1F535; **Activity**
1. Use the this array to do the following: `nums = [2, 4, 5, 6, 9, 10]`;
2. Using `filter`, return a new array with only the odd numbers.
3. Use `map` to return an array where the numbers in the new array are multiplied by 10.

&#x1F34F; Fist to five! How are you feeling about filter?

## Reduce

**Syntax**<br>
`array.reduce(function(){}, value)`

The `reduce` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

Note: the second parameter that is in the `reduce` function is the initial value that will be returned. For example, if there is a zero at the end of the function, you are starting with an inital value of zero and expecting a number to be returned. If you enter an empty array, then you're telling reduce to start with an empty array and return your results in an array.

What if we want to sum all the numbers in our array?

&#x1F535; **Code Along**

**For Loop**
```
var numbers = [1, 2, 3, 4];
var totalNumber = 0;

for(var i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i];
}

console.log("The total number is", totalNumber); // 10
```

**Reduce**
```
var sum = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
}, 0);
// sum is 6
```

Or you can set your array as a variable and call reduce on the variable:
```
nums = [0, 1, 2, 3];

var sum = nums.reduce(function(a, b) {
  return a + b;
}, 0);
// sum is 6
```

**What's happening with when you reduce?**
I like to see exactly what is going on with the `reduce` property, so I'm console logging all of the values in my function to see what is happening each time it loops through:

```
nums = [0, 1, 3, 4, 5, 6];

var sum = nums.reduce(function(a, b) {
	console.log("A is " + a);
	console.log("B is " + b);
	console.log("A + b = " + (a + b));
	console.log("////////////////////////")
  return a + b;
}, 0);
// sum is 6

console.log(sum);
```
***OUTPUT:***
```
// A is 0
// B is 0
// A + b = 0
// ////////////////////////
// A is 0
// B is 1
// A + b = 1
// ////////////////////////
// A is 1
// B is 3
// A + b = 4
// ////////////////////////
// A is 4
// B is 4
// A + b = 8
// ////////////////////////
// A is 8
// B is 5
// A + b = 13
// ////////////////////////
// A is 13
// B is 6
// A + b = 19
// ////////////////////////
// 19
```

It works like this:

- The second argument to the function call is considered to be the 'starting value' for the total - this is what you start out with.
- For each item in the array, it calls the callback, with the total value up to that point, and the item itself. For the first item, the 'total value' is the starting value.
- You return a new 'total value'. In this case, it's the sum of all previous numbers plus the current number. This return value is used as the 'total value' for the next item.
- After running out of items, the 'cumulative' total value is returned.

**Reduce can also work on an array of arrays:**

&#x1F535; **Code Along**

```javascript
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
```

&#x1F535; **Activity**
1. Use the this array to do the following: `nums = [2, 4, 5, 6, 9, 10]`;<br>
2. Using `reduce`, return the sum of the numbers.<br>
3. Use this second array of arrays to return an array that does not contain any arrays, only strings: `names = [['Mickey', 'Minnie'], ['Donald', 'Daisy'], ['Pluto']];`

**Chain it!**
What if we want to do something to our original array and then reduce it all down to one value?

&#x1F535; **Code Along**

***For loop:***
```
var numbers = [1, 2, 3, 4];
var totalNumber = 0;

for(var i = 0; i < numbers.length; i++) {
    totalNumber += numbers[i] * 2;
}

console.log("The total number is", totalNumber); // 20
```

**Reduce and Map**
```
var numbers = [1, 2, 3, 4];

var totalNumber = numbers.map(function(number){
    return number * 2;
}).reduce(function(total, number){
    return total + number;
}, 0);

console.log("The total number is", totalNumber); // 20
```
&#x1F34F; Fist to five! How are you feeling about reduce?

&#x1F535; **Activity**
1. Use the this array to do the following: `nums = [2, 4, 5, 6, 9, 10]`;<br>
2. using `map`, multiply each of these numbers by 10.<br>
2. Using `reduce`, return the sum of the numbers.


## forEach

**Syntax**<br>
`array.forEach(function(){})`

Perhaps you really do want a `for loop` - you're not transforming and returning any values, you just want to cause some kind of side-effect (eg. creating a DOM element). It would be nice if you could chain it at the end of a map/reduce/filter 'pipeline', and indeed you can! In steps the higher-order function known as `forEach`.


&#x1F535; **Code Along**

***For Loop:***
```
var numbers = [1, 2, 3, 4];

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

***forEach***
```
var numbers = [1, 2, 3, 4];

numbers.forEach(function(number){
    console.log(number);
});
```


&#x1F535; **Activity**
1. Use this array to do the following: `nums = [2, 4, 5, 6, 9, 10]`;<br>
2. Console log each number in the array and its index.

**forEach can be used on Objects**

```
var numbers = {one: 1, two: 2, three: 3, four: 4};

Object.keys(numbers).forEach(function(key){
    var value = numbers[key];
    // console.log(key);
    console.log(value);
});
```

&#x1F34F; Fist to five! How are you feeling about forEach?

&#x1F535; **Activity**
1. Use this object to do the following: `matrix = {start: 10, end: 6, location: remote, type: wdi};`<br>
2. Console log each value in the object.<br>
3. On the next line, console log both the key and value.

**Chain it!**
Let's take an array of objects and print the values of the objects that meet a certain requirement. Here's an [example](https://egghead.io/lessons/javascript-chaining-the-array-map-and-filter-methods) where we can print out the name of the stock if the price of the stock is above one that we specify.

&#x1F535; **Code Along**
**forEach and Map**

```
var stocks = [
	{ symbol: "XFX", price: 240.22, volume: 23432 },
	{ symbol: "TNZ", price: 332.19, volume: 234 },
	{ symbol: "JXJ", price: 120.22, volume: 5323 }
];

var filteredStockSymbols = stocks.filter(function(stock) {
	return stock.price >= 150.00;
}).map(function(stock) {
	return stock.symbol;
}).forEach(function(symbol) {
	console.log(symbol);
});

```

### Check for understanding
1. What is the filter function doing?<br>
2. What is the map function doing?<br>
3. What is the forEach function doing?

[Reference for lesson](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them)

# Review


## LOOPING OVER OBJECTS

There are two way to loop over objects. You can use either way. Both ways involve looping over the object's **keys**.

Let's say we have a pokemon object:

```
var pokemon =  { name: "Charizard", HP: 68, attack: 130 }
```

<br>

## `for ... in` loop

Print each key:

```
for (var key in pokemon) {
	console.log(key);
}
```


<br>

Print each value:

To do this, use the key as a **variable** within the square brackets.

```
for (var key in pokemon) {
	console.log(pokemon[key]);
}
```

<br>

## `Object.keys()`

Object.keys() will return an **array of keys**

```
console.log(Object.keys(pokemon));
```

To print the values, use the key as a **variable** within square brackets.

```
var keys = Object.keys(pokemon);

for (var i=0; i < keys.length; i++) {
	console.log(pokemon[keys[i]]);
}
```

Unre-factored version:

```
for (var i=0; i < Object.keys(pokemon).length; i++) {
	console.log(pokemon[Object.keys(movie)[i]]);
}
```

<br>
<hr>


# Pokemon loop

Give the following pokemon:

```
var pokemon = { name: "Ivysaur", HP: 60, attack: 62 }
```

&#x1F535; **Activity**

* Use a **for..in** loop to print all the keys of the pokemon object
* Use a **for..in** loop to print all the values of the pokemon object

<br>

CHALLENGE

With the following array of Pokemon objects:

```
var pokemon = [ 
               { name: "Charizard", HP: 68, attack: 130 },
               { name: "Ivysaur", HP: 60, attack: 62 },
               { name: "Jigglypuff", HP: 45, attack: 20 },
               { name: "Mr. Mime", HP: 40, attack: 45 }
             ]
```

&#x1F535; **Activity**

* Use **Object.keys** loop to print all the values of the pokemon object.

## Debugger

Here is a video of the debugger in action and a nice walkthrough:
- https://www.youtube.com/watch?v=zv_aOlH8S_o

