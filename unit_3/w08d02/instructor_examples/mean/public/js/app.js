var app = angular.module("MEANStackApp", []);

app.controller('baseCtrl', ['$http', function($http){
    var controller = this;
    this.foundName = 'none';
    // this.getData = function(){
    //     $http({
    //         method:'GET',
    //         url:'/data'
    //     }).then(function(response){ //success
    //         controller.foundName = response.data.name;
    //     }, function(error){ //fail
    //
    //     });
    // }
    this.postData = function(){
        $http({
            method:'POST',
            url:'/data',
            data: {
                matt:'awesome'
            }
        }).then(function(response){ //success
            console.log(response);
        }, function(error){ //fail

        });
    }
}]);
