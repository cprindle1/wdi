var app = angular.module('MoviesApp', []);

app.controller("MainController", ['$http', function($http){
  var controller = this;

  this.create = function(){
    $http({
      method: 'POST',
      url: '/movies',
      data: {
        title: this.title,
        year: this.year,
        rating: this.rating,
      }
    }).then(function(response){
      controller.title="";
      controller.year="";
      controller.rating="";
      controller.getMovies();
    });
  };

  this.deleteMovies = function(id){
    $http({
      method: 'DELETE',
      url: '/movies/'+id,
    }).then(function(response){
      console.log("deleted", response);
    }, function(response){
      console.log("failed", response);
    });
    controller.getMovies();
  };

  this.showEdit = function(id){
      this.editableMoviesId = id;
  };

  this.updateMovies = function(movies){
    $http({
      method: 'PUT',
      url: '/movies/' + movies._id,
      data: movies
    }).then(function(response){
        controller.editableMoviesId=null;
        controller.getMovies();
    });
  };

  this.getMovies = function(){
    $http({
      method: 'GET',
      url: '/movies'
    }).then(function(response){
      controller.movies = response.data;
    });
  };
  this.getMovies();
}]);
