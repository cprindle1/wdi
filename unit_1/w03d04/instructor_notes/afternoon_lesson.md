![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Events in a Loop & This<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan<br>
Topics: jQuery '$(this)', and making a color palette picker<br>
<hr>

### LESSON OBJECTIVES
_after this lesson, students will be able to:_

- generate DOM elements in a _for_ loop
- set a single click listener on each element generated inside the _for_ loop
- write a single click handler outside the loop
- use the keyword `$(this)` to target an element within the handler

<hr>

## SETUP (10 mins)

* In your `student_examples` directory for today `unit_01/w03d04/student_examples` :
* Make a _directory_ called `events_and_loops`
* Inside the `events_and_loops` directory, make an `index.html` and an `app.js` and a `style.css`
* Link your `index.html` to the `app.js` and the `style.css`.
* Add a link to the jQuery CDN
* Write a console.log in your `app.js` for testing
* Load the `index.html` in your browser and make sure the console.log appears in your Chrome console

<br>
<hr>


### DYNAMICALLY GENERATING CONTENT

##### We are going to make a sketchpad

Let's say we want to have **ONE THOUSAND** square divs on our page. We _could_ write out or copy/paste 1000 divs, **or** we could use a _for_ loop and do it once. Keepin' it DRY.

We are going to make 1000 square divs for our sketchpad. Each div will have the same event handler.

&#x1F535; **Activity (10 mins)**

FIGURE IT OUT

The goal is to generate 1000 divs in a _for_ loop and append them to the body

* Write a loop that counts up to 1000
* Inside the loop, create a div
* Give the div a class of `square` (just for display purposes)
* Append the div to the `body`

* Check in the Elements tab in your console to see if you have 1000 divs with class 'square'

* In your css, set the size of each square to 20px x 20px, and display to inline-block. Give them a background-color of ivory. Temporarily, you could give them a border of 1px solid grey to see them better.


&#x1F535; **Class Walkthrough and Code Along(15 min)**

```
  for (var i=0; i < 1000; i++) {
    var $div = $('<div>');
    $div.addClass('square');
    $('body').append($div);
  }
```


&#x1F535; **Watch (15 min)**

Now, we can add an eventListener to the div within the loop. For our sketchpad, we don't want a 'click'. Instead, we can use a 'mouseover'.

* set an event listener one time within the loop. The first argument for the listener should be `mouseover` instead of `click`. For the second argument, use a named handler function called `changeColor`
* Write the `changeColor` function above and outside the loop.
* The handler function will add a class `pink` that will make the _target_ element pink. To locate the target element, use the keyword `$(this)`.

Even though we set the _same_ click listener and handler on each div, we can target each individual div with the keyword `$(this)`.

```
$(function() {

  var changeColor = function() {
    console.log('clicked');
    $(this).addClass('pink');
  }

  for (var i=0; i < 1000; i++) {
    var $div = $('div');
    $div.addClass('square');
    $('body').append($div);
    $div.on('mouseover', changeColor);
  }
})
```


## SKETCHPAD ACTIVITY

&#x1F535; **Activity in groups**

* Make it so your sketchpad works: when you mouseover a square its color will change to pink


&#x1F535; **Activity in groups (20 mins)**

FIGURE IT OUT

* Using an input field, make it so that the user can decide how many divs there are!

* There will be an input box and a button. When the button is clicked, it will grab the user's input from the input box.

* The value from the input box can be used in the control panel of your for loop

STEPS:

Add an input box and a button to the html:
index.html

```
<input id="inputBox" type="text" placeholder="grid size"/>
<button id="inputButton">SUBMIT</button>
```

* Above your for loop (NOT inside the loop) Grab both the input box and button in your js
* Set an event listener on the button.
* When it is clicked, inside the handler capture the input with `inputBox.val()`. `Console.log(inputBox.val())`

Where should the code that generates your divs reside? Inside the button's click handler? What is the sequence of events?

How can you change your for loop to generate the number of divs that you grabbed from the input box? Do you need to change the input from a string to a number?

&#x1F535; **Activity in groups (20 mins)**

SUPER FIGURE IT OUT

* Make it so that when the user mouses over a square, a _random_ color will appear, not just pink. There are many different ways to solve this problem. The important thing is that you try to tackle it rather than solve it.

&#x1F535; **Activity in groups (20 mins)**

SUPER FIGURE IT OUT

* Make it so that the square divs are contained inside a container div of fixed height and width. Depending on how many divs the user decides to make, the divs should alter their _size_ to fit the container!

<br>
<hr>

&#x1F535; **Show (5 mins)**

Show your sketchpad!

&#x1F535; **Review (5 mins)**

What are the steps involved in setting a single click listener and handler on multiple elements?

1. Make a loop that runs x amount of times
2. Generate an element and append it to the page
3. Give the element some css if necessary
4. Set an event listener on the element
5. Write an event handler for the event listener (either anonymous or named)
6. Use the keyword `$(this)` to refer to the target element within the event handler

<br>
<hr>



## JQUERY COMMANDS

- window.onload

```
$(function() {
	// code inside jQuery window onload
})
```

- this: `$(this)`

- create element: `$('<div>')`, `$('<p>')`, etc.

- select all elements of type: `$('div')`, `$('p')`, etc.

- ^^ The two commands above are very similar but they do completely different things!

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element: `jQueryElement.addClass('className')`

- get the parent of an element: `jQueryElement.parent()`

- get child elements: `jQueryElement.children()`

- set an event listener: `jQueryElement.on('click', function() {} )`

- click listener: `jQueryElement.click( function() {} )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( jQueryElement )`

- prepend elements: `jQueryElement.prepend( jQueryElement )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hasClass('someClass')`

- remove a class from an element: `jQueryElement.removeClass('someClass');`

- set a css property on an element: `jQueryElement.css('property', 'value')`

- clone an element: `jQueryElement.clone()`

- append an element with the order reversed: `jQueryElement.appendTo( jQueryElement )`

- get a specific jQuery element from a list: `jQueryCollection.eq( indexNum )`

- empty an element of content:
`jQueryElement.empty()`



<br>
<hr>
License
<hr>
