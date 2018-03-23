# Lab - Basic Forum

## Summary

- This is a basic forum that will allow users to post their `thoughts` to app
- The goals are:
    - to have users enter a thought via a form on the page
    - submitting the form makes an AJAX POST request to the server which saves the thought in mongo and sends a response of all the thoughts in mongo
    - upon receiving the response from the server, the callback for the AJAX POST request should set things up so that all the thoughts in mongo are displayed on the page
    - upon loading the page, angular should make an AJAX GET request to the server which sends a response of all the thoughts in mongo
    - upon receiving the response from the server, the callback for the AJAX GET request should set things up so that all the thoughts in mongo are displayed on the page
- See if you can build the app without looking at the guide below.  The goals listed above are typical to how you will be told to do things in the industry.

## Guide

### Setup

1. Create an express app
1. Set up a public directory for your static js/html files
1. Create an index.html and an app.js file for your angular app in the public directory

### Create a Thought

1. In the index.html file, create a form with a text input that the user fills out
    - The text input should `ng-bind` to a controller property called `content`
1. Upon submitting the form, angular will make a POST request to `/thoughts`, via AJAX
    - The `data` property for the AJAX request should be set to `{ content: this.content }`
1. Create a `Thought` model with mongoose
    - It should have a String property called "content"
1. Create a `/thoughts` route handler in express for the POST request
    - It will create a new `Thought` using req.body
1. Once the thought has been added to mongo, the POST route handler will perform a find for all the Thoughts and `res.json()` a response of the results of the find
1. Back in your angular code, in the callback to the AJAX POST request to `/thoughts`, create a `thoughts` property on the controller object and set it to the array in the response from the server
1. In the html, render the thoughts to the page by using `ng-repeat` on the controller's `thoughts` variable that you set in the last step

### On Page Load, Show All The Thoughts

1. Create a GET route in express that will `res.json()` all the `Thought` documents
1. In angular, when the controller loads, make an AJAX request to express's GET route from the last step
1. Once your angular code receives the response from the server, set the controller's `thoughts` property to the array in the response from the server
    - The HTML should already be set up so that it will properly render the thoughts to the page
