var app = angular.module('CrossSiteAJAXApp', []);

app.controller('RequestController', ['$http', function($http){
    $http({
        method:'GET',
        // url:'http://www.omdbapi.com/?t=rogue+one' //works normally
        // url:'https://status.github.com/api.json' //not allowed
        // url:'/status' //works with proxy
        // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOURAPIKEYHERE' //api key exposed
        url:'/maps?address=94+Walnut+Rd,+Lake+Peekskill,+NY' //hides api key
    }).then(function(data){
        console.log(data);
    }, function(error){
        console.log(error);
    });
}]);
