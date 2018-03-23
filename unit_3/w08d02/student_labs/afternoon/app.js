var app = angular.module("MyApp", []);

app.controller('baseCtrl', ['$http',  function($http){
  var controller=this;
  this.title="";
  this.foundTitles=[];
  this.foundMovieTitle = '';
  this.clicked=false;
  this.detailedMovie="";
  this.find=function(){
    this.clicked=false;
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s='+controller.title
    }).then(
      function(response){
        console.log(response);
        controller.foundTitles=response.data.Search;
      },
      function(error){
        console.log('fail');
        console.log(error);
      }
    );
    this.title="";
  };

  this.showMovie = function(movie){
    this.clicked=true;
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?t='+movie.Title
    }).then(
      function(response){
        console.log(response);
        controller.detailedMovie=response.data;
      },
      function(error){
        console.log('fail');
        console.log(error);
      }
    );
  };
}]);
