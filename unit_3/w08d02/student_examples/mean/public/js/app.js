var app = angular.module("MEANStackApp",[]);

app.controller('baseCtrl', ['$http', function($http){
  var controller=this;
  this.foundName = 'none';
  // this.getData=function(){
  //   $http({
  //     method: 'GET',
  //     url: '/data'
  //   }).then(function(response){
  //     controller.foundName = response.data.name;
  //   }, function(error){
  //
  //   });
  // };
  this.postData=function(){
    $http({
      method: 'POST',
      url: '/data',
      data: {
        charlie: 'awesome'
      }
    }).then(function(response){
        console.log(response);
    }, function(error){

    });
  };
}]);
