var app = angular.module('MousseApp', []);

app.controller("MainController", ['$http', function($http){
  var controller = this;

  this.create = function(){
    $http({
      method: 'POST',
      url: '/mousse',
      data: {
        flavor: this.flavor,
        texture: this.texture,
        color: this.color,
        goesWithFruit: this.goesWithFruit
      }
    }).then(function(response){
      controller.flavor="";
      controller.color="";
      controller.texture="";
      controller.goesWithFruit="";
      controller.getMousses();
    });
  };

  this.deleteMousse = function(id){
    $http({
      method: 'DELETE',
      url: '/mousse/'+id,
    }).then(function(response){
      console.log("deleted", response);
    }, function(response){
      console.log("failed", response);
    });
    controller.getMousses();
  };

  this.showEdit = function(id){
      this.editableMousseId = id;
  };

  this.updateMousse = function(mousse){
    $http({
      method: 'PUT',
      url: '/mousse/' + mousse._id,
      data: mousse
    }).then(function(response){
        controller.editableMousseId=null;
        controller.getMousses();
    });
  };

  this.getMousses = function(){
    $http({
      method: 'GET',
      url: '/mousse'
    }).then(function(response){
      controller.mousses = response.data;
    });
  };
  this.getMousses();
}]);
