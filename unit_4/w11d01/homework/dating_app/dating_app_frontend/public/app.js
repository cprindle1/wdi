// angular digest loop
// The digest loop evaluates angular '$watch' items for changes in order for changes to be made to the DOM.  This allows for the DOM to be manipulated by changes in the data without specifically calling for a change in appearance of the web page


var app = angular.module('dating_app', []);

app.controller('mainController', ['$http', function($http){
  this.test = "HI";
  this.URL = 'http://localhost:3000/users';
  this.left_daters = [];
  this.right_daters = [];
  this.daters = [];
  this.formdata={};

  $http({
    method: 'GET',
    url: this.URL
  }).then(function(result){
    console.log(result);
    this.daters = result.data;
    this.left_daters = result.data.splice(0,3);
    this.right_daters = result.data;
  }.bind(this));

  this.processForm = function(){
  console.log("formdata here: ", this.formdata);
  $http({
    method: 'POST',
    url: this.URL,
    data: this.formdata
  }).then(function(result){
    console.log('Data from server: ', result);
    this.formdata = {};
  }.bind(this));
};

}]);
