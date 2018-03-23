var app = angular.module('ApplyApp', []);

app.controller('MainController', ['$scope', function($scope){
  this.foo='bar';
  var controller = this;
  $('button').click(function(){
    $scope.$apply(function(){
      controller.foo='changed';
    });
  });
}]);
