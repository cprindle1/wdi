var app = angular.module('myApp', []);

app.controller('baseCtrl', ['$http', function($http){
    var controller = this;
    this.foundMovieTitle = 'nothing';
    this.find = function(){
        $http(
            {
                method:'GET',
                url: 'http://www.omdbapi.com/?s=frozen'
            }
        ).then(
            function(response) { //success callback
                console.log(response);
                // controller.foundMovieTitle = response.data.Title;
            },
            function(error){ //fail callback
                console.log('fail');
                console.log(error);
            }
        );
    };
}]);
