var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({enabled: true});
  $routeProvider.when('/url1', {
    template: '<h2>This is the URL1 section: {{main.foo}}</h2>',
    controller: function(){
      this.foo='bar';
    },
    controllerAs: 'main'
  });
}]);
