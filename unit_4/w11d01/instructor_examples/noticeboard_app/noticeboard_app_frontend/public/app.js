console.log('hi');

var app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http) {
  this.message = "angular works!";
  // declare variables for visibility
  this.notices = [];
  this.formdata = {};

  // var controller = this;
  // GET ALL NOTICES
  $http({
    method: 'GET',
    url: 'http://localhost:3000/notices'
  }).then(function(result) {
    console.log(result);
    this.notices = result.data;
  }.bind(this));

  this.processForm = function() {
    console.log('formdata here: ', this.formdata);
    $http({
      method: 'POST',
      url: 'http://localhost:3000/notices',
      data: this.formdata
    }).then(function(result) {
      console.log('Data from server: ', result);
      this.formdata = {}
      this.notices.unshift(result.data);
    }.bind(this));
  }

}]);
