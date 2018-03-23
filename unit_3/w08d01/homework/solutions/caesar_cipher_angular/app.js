console.log('app.js is connected');

var app = angular.module('cipher', []);

app.controller('MainController', [function() {

	this.encrypt = function() {
		this.encrypted = caesarShift(this.original, 12)
	}

	this.decrypt = function() {
		this.decrypted = caesarShift(this.input, -12)
	}

}]);
