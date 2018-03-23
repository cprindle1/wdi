![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: OOP - Tamagotchi builder <br>
Type: Lesson<br>
Duration: 2.5 hrs<br>
Instructor: Kristyn Bryan
Original Creator: Thom Page<br>
Topics: OOP and Object methods <br>
<hr>

# OOP and OBJECT METHODS

### Lesson Objectives
_After this lesson, students will be able to:_

- Write a method into an object and invoke it
- Use `this` to refer to properties of an object
- Invoke object methods with arguments
- Write an object that references another object
- Run a basic program by making an interactive Tamagotchi

<hr>

### SETUP (5 mins)

* In the `student_examples` directory for today, `unit_1/w2d3/student_examples` make a directory `oop_tamagotchi`
* Inside the `oop_tamagotchi` directory, add an `index.html` and an `tamagotchi.js` and link them together
* Add a console.log and test that the message will appear in your Chrome console

* Waiting? Have a read of this: `http://1bytebeta.com/object-oriented-programming-javascript/`
<br>
<hr>

![tamagotchi](http://edublog.amdsb.ca/myblogah1/files/2016/04/o-tama3-1f1lut1.jpg)

### OOP - Object-Oriented Programming (5 mins)

Object Oriented Programming is a design pattern where all processes are encapsulated inside objects.

From MDN (Mozilla Developer Network):

>OOP envisions software as a collection of cooperating objects rather than a collection of functions or simply a list of commands (as is the traditional view). In OOP, each object can receive messages, process data, and send messages to other objects. Each object can be viewed as an independent little machine with a distinct role or responsibility.

<br>
<hr>


## OBJECT METHODS
**MAKING AND EXECUTING A METHOD INSIDE AN OBJECT (5 mins)**

We are going to make an object and have it _do_ something. We can store functions inside objects. Let's make a Tamagotchi, just a regular object with properties:

**Code Along (7 min)**

```
var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10
}
```

Our objects can contain primitive datatypes as values for the keys, and we have seen that they can contain arrays and other objects as values too. Objects can also contain _functions_ as values. When a function is stored within an object, it's called a **method**. Let's add a method to our Tamagotchi:

```
var tamagotchi1 = {
  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function() {
    console.log("WAAAH!!!!!!");
  }
}

```

The function is a value of the key `cry`. It is a **method** of the `tamagotchi1` object.

We can invoke the method like this:

```
tamagotchi1.cry();
```


&#x1F535; **Activity (7 min)**

* Write a method `puke` into your Tamagotchi object that console.logs the Tamagotchi having a sick-up
* Invoke the `puke` method

&#x1F535; **Activity**

* Write a method `yawn` into your Tamagotchi object that console.logs the Tamagotchi yawning when it is tired
* Invoke the `yawn` method

<br>
<hr>



## KEYWORD `THIS`
**REFERRING TO AND CHANGING INTRA-OBJECT PROPERTIES WITH KEYWORD `THIS` (2 min)**

Using `this`, we can have our object methods _act upon_ other properties that are intrinsic to our object.

Let's say we want our `cry` method to decrease the amount of food in the Tamagotchi's tummy. We would refer to the `foodInTummy` property with `this.foodInTummy`. To log this particular tamagotchi's name, we would write `this.name`:


&#x1F535; **Code Along (4 min)**

```
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  }
```

&#x1F535; **Watch (4 min)**

Copy and make another tamagotchi object, `tamagotchi2`, and change its name property.

tamagotchi2:

```
  name: "Helga",	
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  }
```

```
tamagotchi1.cry()

=> this.name will refer to "Simon"
```

```
tamagotchi2.cry()

=> this.name will refer to "Helga"
```


&#x1F535; **Activity (10 min)**

* Comment out the `tamagotchi2` object.

With the `tamagotchi1` object:

* Make it so that when `cry` is invoked, it decreases the object's foodInTummy value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

&#x1F535; **Activity**

* Make it so that when `puke` is invoked, it decreases the object's health value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

&#x1F535; **Activity**

* Make it so that when `yawn` is invoked, it decreses the object's restedness value by 1 and logs the new number to the console, and also logs the Tamagotchi's name

<br>

## MORE ON `THIS`

### CONTEXT IN JAVASCRIPT

&#x1F535; **Demonstrate (10 mins)**

In Javascript, everything belongs to an object. We use `this` to tell us what object we are currently in. This is called **context**, not to be confused with **scope**.

In the the Chrome console, we can type `this`, and ask: **To what object** does everything in the browser belong?

![](https://i.imgur.com/wKiWzRe.png)
<br>

**The result is the `Window` object:**

![](https://i.imgur.com/5CILvi2.png)

<br>

If we write a function that is not inside an object, and ask it for `this` to see what object it belongs to:

```
var tellMe = function() {
  console.log(this);
}
```
<br>

**By default, it exists inside the `Window` object, the most global object, because we have not put it inside of an object**

![](https://i.imgur.com/cGVBneb.png)

<br>

But what if we put our `tellMe` function inside our own object?

We can make an object an put our `tellMe` method within:

```
var currentObject = {
  name: "currentObject",
  tellMe: function() {
	 console.log(this);
  }
}
```

When we invoke the method, it will console.log `this` and tell us what object it _belongs to_, including the contents of the object. (in this case, currentObject).

![](https://i.imgur.com/B6NTdJI.png)

Therefore, since `name` is a property of `currentObject`, we can `console.log(this.name)`.

Now we can see why, in our `tamagotchi1` object, our `cry` method, `this.name` or `this.foodInTummy` will refer to the properties of the object in which the `cry` method belongs.

<br>
<hr>


## OBJECTS COMMUNICATE WITH OTHER OBJECTS (10 mins)

Now, we are going to put `this` aside for a while.

Objects can communicate with each other, and we don't need `this` for objects to communicate with each other. All it takes is for an object to refer to a previously defined object.

So far, we have a `tamagotchi1` object with properties and methods of our Tamagotchi:

&#x1F535; **Share code:**

```
var tamagotchi1 = {

  name: "Simon",
  creatureType: "Dragon",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry: function() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy: ' + this.foodInTummy);
  },
  puke: function() {
    this.health--;
    console.log('Bleeeeh! Sick!!!!!!');
    console.log(this.name + ' has current health: ' + this.health);
  },
  yawn: function() {
    this.restedness--;
    console.log('Yaaaawwwwn! So tired');
    console.log(this.name + ' has current restedness: ' + this.restedness);
  }
}
```

Let's make another object, a `player`, that will perform actions on the `tamagotchi1` object. Objects can work together! All we need to do is refer to a previously defined object. Let's give our player a name and method that feeds our tamagotchi:

```
var player = {
  name: "Neo",
  feedTamagotchi: function() {
    tamagotchi1.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi1.name + ' has been fed and now has ' + tamagotchi1.foodInTummy + ' in the tummy');
  }

```

We can invoke the player's `feedTamagotchi` method:

```
player.feedTamagotchi()
```

And it will act upon the previously defined tamagotchi1 object.

<br>
 

&#x1F535; **Activity (10 min)**

* Make a `player` object underneath your `tamagotchi1` object

* Give your player a name

* Write a method `feedTamagotchi` in the player object that will increase the tamagotchi's foodInTummy by 1. Send a console.log with the updated value. Invoke the `player.feedTamagotchi()` method to see if it works

&#x1F535; **Activity**

* Write a `medicateTamagotchi` method in the player object that will give the tamagotchi medicine and increase its health by 1. Invoke the `player.feedTamagotchi()` method to see if it works

&#x1F535; **Activity**

* Write a `knockOutTamagotchi` method in the player object that will put the tamagotchi to sleep and increase its restedness by 1. Invoke the `player.knockOutTamagotchi()` method to see if it works.


<hr>
<br>



## USING ARGUMENTS (5 mins)

We can pass data as arguments to our object methods in the same way that we do it with regular functions. Let's specify what food we are feeding to our tamagotchi.

We give our function a **parameter**, and invoke it with an **argument** as usual:

Player object:

```
  feedTamagotchi: function(food) {
    tamagotchi1.foodInTummy++;
    console.log('YUM!!! ' + tamagotchi1.name + ' has been fed ' + food + ' and now has ' + tamagotchi1.foodInTummy + ' in the tummy');
  },
```

```
player.feedTamagotchi("sprigs");
```

&#x1F535; **Ask**

In this case, when we refer to the `food` variable in our method, why do we not use `this.food`?


&#x1F535; **Activity (7 min)**

* Make it so you can specify what you are feeding to your Tamagotchi
* Invoke the feedTamagotchi method in the console and provide an argument to it.

&#x1F535; **Activity (7 min)**

* Make it so that you can specify what medicine you will give your Tamagotchi
* Try invoking the player methods in the console and provide arguments to them.


BREAK 

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
<hr>
End of lesson
<hr>


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

&#x1F535; **Extra activity in groups**

We want it so that our player can just click buttons on the page rather than type in the commands to feed the Tamagotchi, etc.

* Write three buttons into your index.html: 'feed', 'rest', 'medicate'.
* When the buttons are clicked, they should invoke the respective player object methods to give the Tamagotchi what it needs.

* Write a button that will `start` the tamagotchi

<br>
<hr>
License
<hr>
