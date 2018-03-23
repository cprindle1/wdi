var app = angular.module("MyApp", []);

app.controller('baseCtrl', ['$http', function($http){
  var controller=this;
  this.foundMovieTitle = 'nothing';
this.find=function(){
  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?t=forrest+gump'
  }).then(
    function(response){
      controller.foundMovieTitle=response.data.Title;
    },
    function(error){
      console.log('fail');
      console.log(error);
    }
  );
};
}]);
