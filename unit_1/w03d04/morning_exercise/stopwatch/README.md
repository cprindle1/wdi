![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-HOPPER

---

Title: Stopwatch<br>
Type: morning exercise <br>
Duration: 45 - 60 mins<br>
Topics: jQuery, event handlers, setInterval<br>

---

# STOPWATCH

![](https://i.imgur.com/5mxdArj.png)

`git pull upstream master` to get the starter code. Write directly into **app.js**.

Using `setInterval`, make it so that the stopwatch will run! The timer should count in seconds.

**starter code:**

Styles, font, jQuery, and app are all linked and ready to go. Open `index.html` in your browser.

In **app.js:**

Listeners have been placed on the stopwatch buttons.

Event handlers for the buttons have been defined. Fill in the event handlers.

## DIRECTIONS

Make it so that when you click the **start** button, the stopwatch timer will increase by 1 every second.

Remember to build and test your handler piece by piece. 

* First, console.log a message upon click. 
* Then, console.log the stopwatch text.
* Then, make it so the timer will increase by 1 each time you click. 
* Then, use `setInterval` inside the handler to increment the timer every 1000 milliseconds 

_Hint:_ The content of the stopwatch is **text**. How can you turn that text into a number so that it can be incremented?

_Note:_ Pseudocode for **setInterval**

```
setInterval(CALLBACK, MILLISECONDS);
```

Example **setInterval** from the pseudocode:

```
setInterval(function() {
	console.log('hi');
}, 1000);
```

[setInterval on w3 schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)

<br>
<hr>

## BONUSES

**stop button**

* Make it so that when you click **stop**, the timer will stop counting. Use `clearInterval` to stop your previous `setInterval`.

[clearInterval on w3 schools](https://www.w3schools.com/jsref/met_win_clearinterval.asp)

The tricky part about using clearInterval is the scoping.


**reset button**

* Make it so that when you click **reset**, the timer will stop and reset to `0`.

**countdown button**

* Make it so that when you click the **countdown** button, the timer will start counting down from its current time.
