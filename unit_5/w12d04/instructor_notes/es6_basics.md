![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIr-HOPPER

---
Title: ES6 Basics <br>
Type: Optional topic<br>
Creator: Thom Page <br>
Competencies: Basic JS, ES5<br>

---

# ES6 Basics

## `let` and `const`

`let` and `const` are replacements for `var`. 

**Block scope.** `let` and `const` are block-scoped rather than function-scoped.

`var` within a block leaks out:

```javascript
if (true) {
  var num = 1;
}
console.log(num);
```

> 1


Constrain scope to a block with `const` and `let`:

```javascript
if (true) {
  const num = 1;
}
console.log(num);
```

> ReferenceError: num is not defined

```javascript
if (true) {
  let num = 1;
}
console.log(num);
```

> ReferenceError: num is not defined

**for loop blocks**

With `var`, variables are function-scoped so the value is available outside the block of a for loop:

```javascript
for (var i=0; i < 10; i++) {}

console.log(i);
```
> 10

With `let` variables are block-scoped and not available outside the block.

```javascript
for (let i=0; i < 10; i++) {}

console.log(i);
```

> ReferenceError

This is good because it prevents scope pollution.

`const` means a variable is constant and can't be changed.

```javascript
const num = 1;

num = 2;
```

> TypeError: Assignment to constant variable.

Great use for `const`: use it to declare functions (a function should never be overwritten)

Consider:

```javascript
var someFunc = function() {
	return "Hi"
}

var someFunc = null;

someFunc();
```
> TypeError: someFunc is not a function

This is just madballs. A function should never be overwritten like that.

Use `const` for all your functions:

```javascript
const returnOne = function() {
  return 1;
}

const returnOne = null;

returnOne();
```
> SyntaxError: Identifier 'returnOne' has already been declared

The function was not overwritten.




<br>

## `() => {}` Arrow functions

First, arrow functions are simplified syntax for writing functions:

```javascript
const returnOne = () => {
  return 1;
}
```

```javascript
const returnInput = (input) => {
  return input;
}
```

```javascript
const combineArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
}
```

#### Arrow functions: Implicit return for one-liners

```javascript
const printOne = () => 1;
```

```javascript
const printInput = (input) => input;
```

```javascript
const combineArrays = (arr1, arr2) => arr1.concat(arr2);
```

#### Arrow functions: Callbacks

Anonymous callbacks with arrow functions look neat.

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map((elem) => {
  return elem * 10;
});
```

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const sumArray = arr.reduce((sum, num) => {
  return sum += num;
});
```

```javascript
const arr = [1, 2, 3, 4, 5, 6];

const evenNums = arr.filter((elem) => {
  return elem % 2 == 0;
});
```

You could also make these with implicit returns:


```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map((elem) => elem * 10);
```

To go a step further, we can even remove parentheses for single parameters:


```javascript
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map(elem => elem * 10);
```

This is quite nice with multiple callbacks and promises:

```javascript
fetch('http://www.omdbapi.com/?t=rogue+one')
 .then(response => response.json())
 .then(json => console.log(json))
 .catch(err => console.log(err))
```

<br>

Express servers are now running with ES6 syntax:

```javascript
const express = require('express');
const app     = express();

const port    = 3001;

app.listen(port, () => console.log('running on port: ', port));
```

With routes:

```javascript
const express = require('express');
const app     = express();

const port    = 3001;

app.get('/resource', (req, res) => {
  res.send('index route');
});

app.get('/resource/:id', (req, res) => {
  res.send('show route for: ' + req.params.id);
});

app.listen(port, () => console.log('running on port: ', port));
```

<br>

## Arrow functions: context

The value of `this` is passed in to an arrow function.

Let's say we have an object with a method inside that logs the value of `this`:

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
  }
}

obj.runTask();
```
> { name: 'my object', runTask: [Function: runTask] }

We get back the object in which `runTask` is defined: "my object"

Let's say we add a setInterval inside `runTask` and console.log `this` within setInterval:

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
    setInterval(function() {
      console.log('This within setInterval: ', this);
    }, 1000);
  }
}

obj.runTask();
```

> Instead of getting back "my object", we get back the global context for setInterval.

If we want to preserve the outer context within setInterval, we can use either `self = this` or `.bind()`

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
    setInterval(function() {
      console.log('This within setInterval: ', this);
    }.bind(this), 1000);
  }
}

obj.runTask();
```

OR

```javascript
const obj = {
  name: "my object",
  runTask() {
    console.log(this);
    const self = this;
    setInterval(function() {
      console.log('This within setInterval: ', self);
    }, 1000);
  }
}

obj.runTask();
```

> This within setInterval:  { name: 'my object', runTask: [Function: runTask] }

Cool. Now how about those arrow functions...

**Arrow functions preserve the value of `this`**

```javascript
const obj = {
  name: "my object",
  runTask: function() {
    console.log(this);
    setInterval(() => {
      console.log('This within setInterval: ', this);
    }, 1000);
  }
}

obj.runTask();
```

> This within setInterval:  { name: 'my object', runTask: [Function: runTask] }

Cool, the arrow function has the value of `this` piped in from the outer context.

**Familiar example: Same thing but in Angular 1.6:**

Old way using `controller = this` with an `$http` request:

```javascript
app.controller('MainController', ['$http', function($http) {

  const controller = this;
  this.APIResult = null;

  $http.get('http://www.omdbapi.com/?t=rogue+one')
   .then(function(result) {
     self.APIResult = result.data;
   });

}]);
```

New way: ES6 Arrow function - `this` is preserved

```javascript
app.controller('MainController', ['$http', function($http) {

  this.APIResult = null;

  $http.get('http://www.omdbapi.com/?t=rogue+one')
   .then((result) => {
     this.APIResult = result.data;
   });

}]);
```

Arrow function shortened version:

```javascript
app.controller('MainController', ['$http', function($http) {

  this.APIResult = null;

  $http.get('http://www.omdbapi.com/?t=rogue+one')
   .then(result => this.APIResult = result.data);

}]);
```

<br>

## Object literal shorthand

Old way

```javascript
const name = "Inigo Montoya";

const obj = { name: name }
```

New way

```javascript
const name = "Inigo Montoya";

const obj = { name }
```

```javascript
const name = "Inigo Montoya";
const movie = "The Princess Bride";
const age = 30;

const obj = {
	name,
	movie,
	age
}
```

**Object methods**

Objects methods can do away with the `key: function` syntax.

```javascript
const obj = {
  name: 'object literal with new syntax',

  printName() {
    console.log(this.name);
  },

  printNameUpperCased() {
    console.log(this.name.toUpperCase());
  }
}
```

```javascript
obj.printName();
obj.printNameUpperCased();
```

<br>

## Default params

Give your functions default parameters. You can then have meaningful output without providing arguments.

```javascript
const sumValues = (val1=20, val2=30) => {
  console.log(val1 + val2);
}

sumValues();
```
> 50

If you provide arguments, the defaults are overridden

```javascript
const sumValues = (val1=20, val2=30) => {
  console.log(val1 + val2);
}

sumValues(9034, 888888);
```
> 897922

<br>

## `...` Spread operator

With the spread operator you can break arrays into elements:

```javascript
const arr = [1, 2, 3, 4, 5, 6];

console.log(...arr);
```
> 1 2 3 4 5 6 


Combine any number of arrays within an array

```javascript
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];

const combinedArrays = [].concat(...arrayOfArrays);
```
> [1, 2, 3, 4, 5, 6]


Merge an existing array into a specific location in another:

```javascript
const cheeses = ['gruyere', 'sharp cheddar'];

const smorgasbord = ['tartines', ...cheeses, 'Hass avocadoes'];
```

> [ 'tartines', 'gruyere', 'sharp cheddar', 'Hass avocadoes' ]


#### Use the spread operator to break up arguments

Old way

```javascript
const printCheeses = (cheese1, cheese2) => {
  console.log(cheese1);
  console.log(cheese2);
}

printCheeses('gruyere', 'sharp cheddar');
```

Another way: put the cheeses array in there

```javascript
const cheeses = ['gruyere', 'sharp cheddar'];

const printCheeses = (cheese1, cheese2) => {
  console.log(cheese1);
  console.log(cheese2);
}

printCheeses(...cheeses);
```


<br>

## Classes

ES6 Classes are just like constructor functions.

```javascript

class Human {

  printName() {
    console.log('Pjotr');
  }

  printAge() {
    console.log(50);
  }

} // end class


let newHuman = new Human;

newHuman.printName();
newHuman.printAge();
```

To provide values to the class, use a `constructor` method (like ruby's initialize method).

```javascript
class Human {

  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  printName() {
    console.log(this.name || 'Pjotr');
  }

  printAge() {
    console.log(this.age || 50);
  }

} // end class


let newHuman = new Human('Jacc', 100);

newHuman.printName();
newHuman.printAge();
```

#### Extending a class

A class can inherit from another class using `extends`

```javascript
class Quasimodo extends Human {

  printWants() {
    console.log('Esmeralda')
  }

}

let newQuasi = new Quasimodo;

newQuasi.printWants();
newQuasi.printName();
```



#### Extending existing classes (Array)


## Methods

* array methods
	* `.includes` 
	* `.fill`
	*  `.find`
	*  `.findIndex`
	*  `.entries`

* string methods
	* `.includes`
	* `.startsWith`
	* `.endsWith` 

* object methods
	* `.assign`

<br>
	








