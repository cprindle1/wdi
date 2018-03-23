![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-HOPPER

---
Title: Shape Clicker<br>
Type: Lab<br>
Duration: 45<br>
Creator: Thom Page <br>
Topics: jQuery this<br>

---

# SHAPE CLICKER

`git pull upstream` master to get the starter code for `shape_clicker`.

The starter code has some shapes hardcoded into the html, and some classes in the css file. You don't need to adjust these files.

In app.js, write the code to perform the following:

_The page starts out like this_

![](https://i.imgur.com/X3y7Uqn.png)


First click on any shape makes a circle:

![](https://i.imgur.com/udRczSn.png)

Second click on any shape makes a square:

![](https://i.imgur.com/Tu1As1l.png)

Third click on any shape makes an upside down triangle

![](https://i.imgur.com/dxoLFSD.png)

Fourth click on any shape makes an octagon

![](https://i.imgur.com/iL3vdfs.png)

Fifth click on any shape makes a heart

![](https://i.imgur.com/2GEK936.png)

The next click starts the process from beginning, starting with the triangle

![](https://i.imgur.com/mB2xpLi.png)

The next will be a circle again, then a square, etc. The process can repeat indefinitely.

Use `$(this)` to target the clicked shape. Use the provided classes to give the shapes ... shape.


# Hungry for More?

- Dynamically generate the initial triangles using jQuery, and set the event listener (once) in the loop
- Set a ‘mouseenter’ event on the shapes that changes the color of the shape to black
- Set a ‘mouseleave’ event on the shapes that changes the color of the shape back to red

<br>
<hr>
