![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-MATRIX

---
### w2d1 homework

---

# Datatypes

So far we have seen:

* Strings
* Numbers
* Booleans
* Arrays
* Objects

When these datatypes are combined, we get a **data structure**, for example, an array that contains objects that each contain booleans.

Let's say you are tasked with creating some software, and it is up to **you** to determine which datatypes and what data structure to use.

For each of the following, write which **datatypes** you would use to represent the data, and then give a small example of the **data structure**:

* A lightswitch that can be either on or off.
* A user's email address.
* A spaceship with a hull, laser blasters, tractor beam, and warp drive.
* A list of wdi-remote-hopper student names.
* A list of wdi-remote-hopper student names each with a location.
* A list of wdi-remote-hopper student names each with a location and each with a list of favorite tv shows.

<hr>
&#x1F534; **Commit your work.**<br>
The commit message should read: <br>
"1st commit - selecting datatypes".
<hr>

<br>
<hr>

## Monkeys!

### Array of objects with arrays and objects

1. Create an array called `monkeys`.<br>
2. Inside the array, create three objects that have the following properties:<br>
    - name
    - species
    - foodsEaten (this should be an array. List more than one food item per monkey.)
    - favoriteColors (this should be an object. List the favorite "bright" color and the favorite "dull" color).
<br>

<hr>
&#x1F534; **Commit your work.**<br>
The commit message should read: <br>
"2nd commit - created array of monkey objects".
<hr>

<br>
<hr>

4. Console log all of the monkeys.<br>

5. Console log just the first monkey object.<br>

6. Console log the `foodsEaten` of the 2nd monkey.<br>

7. Create an empty array called `monkey_names`. Use a **for loop** to iterate over the array of monkey objects, and  and save all of the names of the monkeys to the `monkey_names` array. _hint:_ use `.push()`.

8. Create an empty array called `monkey_colors` and save all of the favorite colors of the monkeys from the `monkeys` array.<br>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"3rd commit - performed operations on the monkey data".
<hr>

<br>
<hr>

# Object-ception

With the following object:

```
var inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Mallorie"
                          }
                       }
                   }
               }
           }
       }
   }
}
```

Change the value of `limbo` to `null`.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"4th commit - accessed limbo".
<hr>


<br>
<hr>


# BONDFILMS
### Look at this array of objects:

```
var bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];
```
 
Yikes. Well, copy the bondFilms **array** of **objects** above into your js file. Use **for loops** and conditionals and methods in order to complete the below:

* Create a new array called `bondTitles` with only the titles of the Bond films, and console.log the new array.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"5th commit - Made an array of bond titles".
<hr>

* Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"6th commit - made an array of odd bonds".
<hr>

* Determine the total cumulative gross of the Bond franchise, and console.log the result. _hint_ To make the grosses into usable numbers, look into the `.replace` Javascript method (there are many ways to do this, however). Look into `parseInt` also. 

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"7th commit - determined the bond films gross".
<hr>


# CSS

You will be using these CSS skills for tomorrow’s Morning Exercise. You watched these videos this weekend, but we recommend reviewing them again before morning exercise.

* [Box Model](https://www.youtube.com/watch?v=HNgdhp1_kEE&index=6&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 7:17

* [CSS Display](https://www.youtube.com/watch?v=qjSe_K3agYc&index=7&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 6:24

* [Positioning](https://www.youtube.com/watch?v=zH8kjJdvmOs&index=8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 11:57

* [Units of measure I](https://www.youtube.com/watch?v=5axuSSBIMuQ&index=9&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 10:25

* [Units of measure II](https://www.youtube.com/watch?v=ZfxNpQm6m2g&index=10&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J), 14:27

#### Congrats! You have completed the homework

<br>
<hr>

# Hungry For More?

CHALLENGE

`bondFilms` again!

- Console log the single movie **object** that contains the actor who starred in the least number of films.

Expected result:

```
{ "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }
```

You should arrive at this result by comparing the frequency of actors.

_hint:_ Objects by definition have **unique** keys. Later in the problem you could create a new object wherein all the Bond actors are keys, and unique, with no doubles. 

_another hint:_ You might come to a place where you will want to iterate over an object. You can iterate over arrays, but did you know you can iterate over objects? 

You can either use `Object.keys()`, documentation [here - Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

Or, you can use a `for ... in` loop, documentation [here - for ... in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

<br>

### More on `for ... in`

The syntax for iterating over an object with `for ... in` is:

```
for (var key in obj) {
	// stuff, such as console.log(key)
}
```

Where `key` is a variable that instantiates for the keys in object, and `obj` is the name 
of the object you are iterating over. So, if you just wanted to console.log all the **keys** in the first bondFilms object, you could write:

```
for (var key in bondFilms[0]) {
	console.log(key);
}
```

Also remember, you can use a variable to access a key in an object, with bracket notation:

`obj[key]` will look for the property in the object that corresponds to whatever the 
variable `key` is. This is very different to the syntax `obj['key']` (notice the quotes) that will look for a key _named_ key, rather than a variable.

To print all of the **values** in the first bondFilms object, you could write:

```
for (var key in bondFilms[0]) {
	console.log(bondFilms[0][key]);
}
```
Good luck!

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"8th commit - Humdinger".
<hr>

<br>
<hr>

## Hungry For Even More?

* Complete this morning's lab

* Complete this afternoon's lab