# Lab - Events, Includes, Custom Directives

Given the following HTML

```html
<!DOCTYPE html>
<html ng-app="MyApp">
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js" type="text/javascript"></script>
	</head>
	<body ng-controller="ParentController as parent">
		<section ng-controller="FirstChildController as first">
			<button ng-click="first.sendMessage()">Click Me</button>
		</section>
		<section ng-controller="SecondChildController as second">
			<div ng-if="second.messageReceived">Message Received</div>
		</section>
	</body>
</html>
```

1. Create the JS so that when you click the `<button>`, the "Message Received" text appears.
1. Put each section in its own external html file and include it
1. Create custom HTML directive elements for each `<section>` so that the final html looks like

```html
<!DOCTYPE html>
<html ng-app="MyApp">
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js" type="text/javascript"></script>
	</head>
	<body ng-controller="ParentController as parent">
		<first-child></first-child>
		<second-child></second-child>
	</body>
</html>
```

**OPTIONAL:** make it so the first child has an `input` field.  Whatever the user types in this input field will appear somewhere inside the second child's html
