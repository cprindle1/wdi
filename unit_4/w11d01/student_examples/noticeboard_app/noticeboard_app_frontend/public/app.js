console.log('hi');

var app = angular.module('noticeboard', []);

app.controller('mainController', ['$http', function($http){
  this.message = "angular works!";

  this.notices = [];
  this.formdata = {};
  this.URL = 'https://noticeboardapi.herokuapp.com/notices';

  $http({
    method: 'GET',
    url: this.URL
  }).then(function(result){
    console.log(result);
    this.notices = result.data;
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
      this.notices.unshift(result.data);
    }.bind(this));
  };

}]);
