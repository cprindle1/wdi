![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-Hopper

<hr>
Title: Events in a Loop & This<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>
Modified by: Kristyn Bryan
Topics: jQuery 'this', and making a color palette picker<br>
<hr>


### Lesson Objectives

_After this lesson, students will be able to:_

- Use jQuery `$(this)` to target events
- Build a color palette picker using loops

<br>
<hr>

## Setup

* In you `student_examples` folder, make a folder called `morning_example`
* create an `index.html` file and an `app.js` file.
* Add the proper links and script tags and connect them.

## Review of `$(this)`

jQuery has its own version of `this`. You can not use jQuery commands on the native js `this`: instead, you have to use `$(this)`

Make a button, and in that button's event handler:

`$(this).text("HAS BEEN CLICKED")`

Trying to use a jquery method on a vanilla JS element won't work:

```
// wrong
this.text("HAS BEEN CLICKED");
```

&#x1F535; **Activity (10 min)**

* change the text on the button when it is clicked

&#x1F535; **Activity**

* change the color of the button when it is clicked

&#x1F535; **Activity**

* make the button disappear when it is clicked

<br>

## BUILD A COLOR PALETTE PICKER (1 hr)

&#x1F535; **Demonstrate color palette picker**

`git pull upstream master` to get the starter code

Open up `palette_picker_starter` within `unit_1/w03d04/student_examples`

Build the app with the class according to the markdown in the directory:

`unit_1/w03d04/student_examples/palette_picker.md`

<br>
<hr>
