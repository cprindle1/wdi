![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Browser Events & This<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan<br>
Topics: DOM Events, This<br>
<hr>

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

- click on DOM elements and run procedures with `.on`
- use the keyword `this` to reference the target element
- use the keyword `this` to reference the parent element

<hr>

### SETUP (10 mins)

In the `student_examples` directory for today, `unit_1/w03d03/student_examples` :

* Make a _directory_ called `this_and_events`
* Inside the `this_and_events` directory, make three files: `index.html`, `app.js`, and `style.css`
* Link them together with a script tag in your HTML file`
* Add a jQuery script tag. NOTE: This link needs to be BEFORE your JS file in your html file.
* Write a console.log into `app.js`
* Load the `index.html` into your browser
* Check in the developer console that the console.log appears and that the files are linked together
* Confirm that your style sheet is attached by chaging the background of the body.

<br>
<hr>

## window onload

You can set an onload event that takes place when everything in the web page has completely loaded. This includes the HTML code, images, CSS files, and Javascript files. When all of them have finished loading, the code inside the window online (for jQuery, you use `$(function (){})`) is called, allowing you to reference everything on the web page. Otherwise, you might be inadvertently trying to reference elements that haven't yet been loaded.

Remember the example from yesterday:

<br>


&#x1F535; **Code Along**

```
$(function(){

	alert('inside window onload');

});

alert('outside window onload');
```

The alert outside of the window onload function runs before the alert inside the window onload function. NOTE: We have the JavaScript file loaded in the `head` of the HTML file. If you put the JavaScript file like after at the end of your HTML (right before the closing of the `body` tag), it will ensure that everything is loaded into the browser before the JS file is executed.

&#x1F535; **Ask (5 min)**

* Why do we want everything loaded on our html page before we load the javascript?


<br>
<hr>

# REVIEW OF EVENTS

As you learned yesterday, every kind of interactivity in the browser is an event: clicks, mouseovers, key presses, scrolling, resizing, loading the page, and more. You focused on using click events and we're going to continue focusing on these today.

Remember, when you interact with the browser it checks to see if there is a _listener_ for that interaction.

If there is a _listener_ present, the browser will try to run any _handlers_ for those interactions.


<br>
<hr>


## Setting Events

How can we set up an event with jQuery?

We need:

1. An element to set it on
2. A _listener_ that listens for the event: _when_ and _where_ should the event take place
3. A _handler_ that runs the procedure we want to have happen when the event is triggered


&#x1F535; **Code Along**

Make a button in our html:

```
<button id="my-button">Click me<button>
```

Grab the button in the JS (DOM element):

```
var $button = $('#my-button');
```
<br>

**EVENT LISTENER**

Set an event listener:

```
button.on('click', functionName);
```

The event listener takes a string as an argument. There are just a few strings that it will recognize as valid events, and 'click' is one of them.

> List of jQuery events:

> https://api.jquery.com/category/events/

<br>

**EVENT HANDLER**

We include a callback function iside the event handler (either anonymous or named) that will execute code when this event takes place.

```
button.on('click', function (){
	console.log("I've been clicked!");
});
```

## $(THIS)

What if we have multiple elements with the same click handler, but we want alter only the element that was clicked? Eg. There is a shorthand way to refer to the event element: the keyword `this`.

&#x1F535; **Watch (6 min)**

Inside your `index.html` - three buttons:

```
    <button id="btn1">Button1</button>
    <button id="btn2">Button2</button>
    <button id="btn3">Button3</button>
```
<hr>

Inside your `app.js` - get the buttons:

```
var $btn1 = $('#btn1');
var $btn2 = $('#btn2');
var $btn3 = $('#btn3');
```

Write in an event handler

```
var display = function() {
  console.log('button clicked');
}
```

Write in listeners for each button

```
$btn1.on('click', display);
$btn2.on('click', display);
$btn3.on('click', display);
```

When we click any of these buttons, the console log will appear.

Inside the _handler_ we can reference the **specific element that was clicked** using the keyword `this`.

Let's change the color of only the **clicked** button to blue:

In the handler:

```
var display = function() {
  console.log('button clicked');
  $(this).css("background-color", "blue");
}
```

A reference to the element is secrely passed into the listener, and then into the handler. We can reference the exact event element (the target of the user's interaction) with the keyword `this`.

We have three buttons each with the same handler. They will run exactly the same code. We can **target** only the clicked element with `this`, as opposed to all of the elements that have the same handler.


&#x1F535; **Activity (10 min)**

* Add code to each of your button click handlers that will change the `innerText` of the button that was clicked to yellow. Use the keyword `this` to accomplish this task.

&#x1F535; **Extra Activity**

* Create and link a css file to your `index.html`
* Make it so that when you click a button that has a named event handler, that button will gain a class called `blue` that will turn the button blue. Use the keyword `this` to refer to the clicked element.

&#x1F535; **Extra Activity**

* If you have two buttons running the same click handler, do they _both_ turn red? Verify that only the button that was clicked turned blue.


&#x1F535; **Activity in pairs (15 min)**

You are going to make three yellow square divs each with their own _listener_, but all with the same _handler_. When you click on a square, that square will turn blue (and only that square) will turn blue.

Directions:

* In your `index.html`, write in three divs with unique ids (whatever you like), and give each a class of `square`
* If you haven't already done so, link a `style.css` to your html
* In your `style.css` give your `square` class a height of 100px and a width of 100px
* Set a background-color on the `square` class to `yellow`
* Set display to inline-block on the `square` class

* Write an event listener for each of these squares. Each listener should run the _same_ named handler function called `changeColor`.
* Using the keyword `this` within your named event handler `changeColor`, make it so that when a square is clicked, it will turn blue.


&#x1F535; **Extra Activity**

* Remove your square divs from the `index.html`. There should be no squares.
* In your js, create 100 divs on the page using a _for_ loop!
* Within the _for_ loop, set a single click event listener on the currently-iterated-div, and have it reference the same handler as before
* Outside the loop, put your previous handler (that changes the div's color)

You should be able to click on any one of these 100 squares and it will change color

&#x1F535; **Extra Activity**

* Make it so that when you click a square, it will toggle between red and blue. Click once = turns blue. Click again = turns yellow. Click again = turns blue., etc.


&#x1F535; **Ask Again (5 min)**

* What does the keyword `this` refer to?
* Why would you use the keyword `this`?


## GRABBING HTML

We can grab in the inner html of an element and save it to a variable.

HTML
```
  <div class="alphabet">A</div>
  <div class="alphabet">B</div>
```

JS
```
var $alphabetLetters = $('.alphabet');

$alphabetLetters.on('click',  function() {
    console.log($(this).html());
    var $selectedLetter = $(this).html();
    console.log($selectedLetter);
  });

```

&#x1F535; **Activity (10 min)**
* Make a tag that contains some text inside.
* Make it so that when you click on the text, you store it inside a variable.
* Console log that variable to test that it has worked.


### Let's store all of the selected letters into a storage variable:


JS
```
var $alphabetLetters = $('.alphabet');
var allSelectedLetters = [];

$alphabetLetters.on('click',  function() {
    var $selectedLetter = $(this).html();
    console.log($selectedLetter);
    allSelectedLetters.push($selectedLetter);
    console.log(allSelectedLetters);
});
```

&#x1F535; **Activity (10 min)**
* Make a couple more tag that contains some more text inside.
* Make it so that when you click on the text, you store what is currently being clicked on.
* Console log that variable to test that it has worked.
* Push what is being clicked on into a variable that will store your data.


### Using events in conditional statements

We can incorporate click events in conditional statements

HTML
```
  <div class="alphabet">A</div>
  <div class="alphabet">B</div>

  <div id="start_over">Start Over</div>
```

JS
```
//Declaring global variables
  var $alphabetLetters = $('.alphabet');
  var $startOver = $('#start_over');
  var allSelectedLetters = [];

//Setting an event listener and handler on alphabetLetters
  $alphabetLetters.on('click',  function() {
      var $selectedLetter = $(this).html();
      console.log($selectedLetter);
      allSelectedLetters.push($selectedLetter);
      console.log(allSelectedLetters);
  });

 //Setting an event listener and handler on startOver
  $startOver.on('click', function(){
    console.log("I was storing :" + allSelectedLetters);
    allSelectedLetters = [];
    console.log("I'm now storing : " + allSelectedLetters);
  });

```

&#x1F535; **Activity**
* Make a couple more tag that contains some more text inside.
* Make it so that when you click on the text, you store what is currently being clicked on.
* Console log that variable to test that it has worked.
* Push what is being clicked on into a variable that will store your data.
* Make a button that allows you to reset your storage variable

&#x1F535; **Extra Activity**
* Create another variable that will hold on to your storage data _before_ you empty it (so your data isn't gone for good - it's just stored in a new variable.
* Console log your new variable to confirm that it's holding onto your old stored data.


&#x1F535; **Ask**

* If we captured our data in an array, but wanted to combine the elements into one string, how could we do this?
* Why would you want to do that?


## THIS.PARENT()

We can grab the parent of the item that was clicked by using `this.parent()`

HTML

```
    <ul id="first_parent">
      <li class="sample_paragraphs">This is a paragraph</li>
      <li class="sample_paragraphs">This is a paragraph also</li>
    </ul>
```

JS
```
  var $sampleParagraphs = $('.sample_paragraphs');

  $sampleParagraphs.on('click', function (){

    $(this).css('background-color', 'papayawhip');

    console.log($(this).parent());
    var $theParent = $(this).parent();
    $theParent.css('background-color', 'blue');
  })
```

### Setting Multiple Events

DOM Level 2 Events are compatible with modern browsers. These allow us to set more than one listener on a given element if we so desire to have more than one.

To set multiple events on the same element, you have different handlers for each event (because it doesn't make sense to set the same handler twice).

&#x1F535; **Code Along (5 min)**

```
button2.on('click', function() {
	console.log('I am invoked inside an addEventListener');
});

button2.on('click', function() {
	console.log('I come from a second click handler.');
});
```

<br>
<hr>
