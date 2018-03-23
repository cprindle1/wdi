# Lab - Routing

Create a series of links in a `nav`.  Each one will render a different result into the `main` part of the page

## Step one

1. Create a route to `/url1`
1. It uses the template `/partials/partial1.html`
1. It uses the controller `Ctrl1`
1. It instantiates the controller as `ctrl`
1. The controller has a name property set to "Controller One"
1. The template displays the controller's name property

## Step two

1. Create a route to `/url1/:id`
1. It uses the template `/partials/partial1.html`
1. It uses the controller `Ctrl1`
1. It instantiates the controller as `ctrl`
1. Alter `/partials/partial1.html` and `Ctrl1` so that this route looks like step one, but also shows the `:id`

## Step three

1. Create a route to `/url2`
1. It uses the template `/partials/partial2.html`
1. It uses the controller `Ctrl2`
1. It instantiates the controller as `ctrl`
1. The controller has a name property set to "Controller Two"
1. The template displays the controller's name property

## Step four

1. Create a route to `/url2/sub`
1. It uses the template `/partials/partial2.html`
1. It uses the controller `Ctrl2`
1. It instantiates the controller as `ctrl`
1. Add an extra property in the `when` statement called `addSubPartial`.  Set it to `'partials/sub_partial.html'`
1. Alter `/partials/partial2.html` and `Ctrl2` so that this route looks like step three, but also shows the sub partial mentioned by the `addSubPartial` property

## Step five

1. Create a route to `/url3`
1. It uses the template `/partials/partial3.html`
1. It uses the controller `Ctrl3`
1. It instantiates the controller as `ctrl`
1. The controller has a name property set to "Controller Three"
1. The template is written inline, inside a script tag, as opposed to an external file
1. The template displays the controller's name property

## Step six

1. Create a default route that redirects back to '/url1'
