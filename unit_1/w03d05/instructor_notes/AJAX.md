![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-HOPPER

<hr>
Title: AJAX with jQuery<br>
Type: Lesson<br>
Duration: A little while<br>
Creator: Thom Page<br>
<hr>

# AJAX with JQUERY

### Lesson Objectives
_After this lesson, students will be able to:_

- Make an AJAX request
- Perform DOM manipulation with the returned data


<hr>

## JSON

JSON stands for **JavaScript Object Notation.**

JSON is just text data stored in JavaScript array and object data structures.

From the [docs](http://www.json.org/):

> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. 

In unit 2 you will see JSON everywhere. It is the primary data structure that you will passing around in your server code. The **Mongo** database stores data in a form of JSON.

This is JSON:

```javascript
{ 
	"key1": "value",
	"key2": "value",
	"key3": "value"
}
```

It's just an object!

This is also JSON:

```javascript
[
	{ "key": "value" },
	{ "key": "value" },
	{ "key": "value" }
]
```

It's just an array of objects!

This is also JSON:

```javascript
[
	{ "key" : ["element", "element", "element"] },
	{ "key" : { "key": "value" }}
]
```

It's just an array of objects, one of which contains another array, and another of which contains another object.

JSON is nothing different to what we have seen before, but it is just static data. JSON does not include **methods**. The data is not executable code, it is text, and does not **do** anything.

<br>

## REMOTE JSON DATA

There are websites that host JSON data. We can load this data into our page, just like a regular webpage, by visiting the url.

We can go to a website on which JSON data is hosted:

[Remote JSON - Paul Blart: Mall Cop](http://www.omdbapi.com/?t=paul+blart%3A+mall+cop)

In the Elements tab, we can see that it is just text:

![](https://i.imgur.com/dGeQ8Ct.png)


### JSON Formatter

Even though it is just text, we can format it to look more like a JavaScript object.

Make the JSON look nice with the Chrome extension JSON Formatter:

[JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en)

![](https://i.imgur.com/AlumEft.png)

Why do we care if someone is hosting JSON data? We can grab this data **for ourselves** over the internet using an **AJAX Request**.

Third-party service such as this is known as an **API**. An **API** is a service that another developer(s) has made available to us over the web. 

<br>

## AJAX

AJAX is an acronym for **Asynchronous Javascript and XML**.

AJAX allows you to query another site for data, typically JSON data. XML isn't used so much any more.

Let's pull the movie data using **AJAX**.

jQuery has a nice AJAX command.

Pseudocode:

```
$.ajax(URL).done(CALLBACK);
```

Expanded: the incoming data is stored in parameter of the callback function. We can name the parameter whatever we want.

```
$.ajax(URL).done(function(result) {
	console.log(result);
});
```

^^ We just console log the data stored in `result`.

Working example:

```
$.ajax('http://www.omdbapi.com/?t=eraserhead&y=&plot=short&r=json')
 .done(function(data) {
   console.log(data);
 });
```

^^ This grabs the JSON of the movie Eraserhead from a website. We can console the returned data by console.logging the parameter used in the callback.

<br>

&#x1F535; **Set up**

`git pull upstream master` to get some setup code in today's `student_examples` directory.

The code is in the `ajax` directory.

&#x1F535; **Activity**

* Make an AJAX request to grab and then console.log the movie data of either

[Paul Blart: Mall Cop](http://www.omdbapi.com/?t=paul+blart%3A+mall+cop)

`http://www.omdbapi.com/?t=paul+blart%3A+mall+cop`

OR

[Eraserhead](http://www.omdbapi.com/?t=eraserhead)

`http://www.omdbapi.com/?t=eraserhead`

&#x1F535; **Extra**

Make two separate AJAX requests to get both movies, one in each request.

&#x1F535; **Extra**

Try using your favorite movie title after the `t=`

<br>

## API QUERY STRING

We are receiving our data from a website that provides data for almost any movie.

`https://www.omdbapi.com/` is a site that provides free JSON data of movies. Someone has spent a great deal of time and energy putting this data together. They are offering their data to us for free.

We can ask **ombdapi** to format a url string for us for any movie in its database.

Scroll down to **Examples** and write in a title. Then hit search. A URL will appear. You can use this URL in your AJAX requests.

![](https://i.imgur.com/yQfCWCl.png)

Click on the URL and you'll see the JSON.

The title of the movie will be formatted in the URL string after the `t=`

<br>

&#x1F535; **Activity**

Use OMDBAPI to get a url string of your favorite movie. Use this url string in your AJAX request.

<br>

## UPDATING THE DOM WITH DATA

Add a movie poster to your page:

```
$.ajax('http://www.omdbapi.com/?t=eraserhead')
 .done(function(data) {
   console.log(data);

   var $img = $('<img>');
   $img.attr('src', data.Poster);
   $('body').append($img);
});
```

We can add an input box into our html so that our user can enter the desired movie title:

```
<input type="text" id="input-box"/>
<submit id="input-submit">Get poster</submit>
```

We can use that input and **interpolate** it in our query string:

```
$('#input-submit').on('click', appendPoster);
```

```
var appendPoster = function() {
	
	var inputText = $('#input-box').val();

	$.ajax('http://www.omdbapi.com/?t=' + inputText)
     .done(function(data) {
	   var $img = $('<img>');
	   $img.attr('src', data.Poster);
	   $('body').append($img);
	});
	
}
```

<br>

&#x1F535; **Activity**

Add an input box and a submit button in your index.html

&#x1F535; **Activity**

Make it so that the user can add movie posters to the page.

&#x1F535; **Extra**

Make it so user adds a movie container div that includes the movie poster, an `h1` with the movie title, a `p` with the year, and a `p` with the director. The user should be able to add more and more movies, each in their own container div.

&#x1F535; **Extra**

Style your page

<br>




