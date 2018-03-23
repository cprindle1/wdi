var app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    this.complete = false;
    this.description = '';
    var controller = this;

    this.createTodo = function(){
        $http({
            method:'POST',
            url: '/todos',
            data: {
                description: this.description,
                complete: this.complete
            }
        }).then(function(response){
            controller.getTodos();
        }, function(error){

        })
    }

    this.updateTodo = function(todo){
        if(todo.complete === true){
            var newComplete = false;
        } else {
            var newComplete = true;
        }

        $http({
            method:'PUT',
            url: '/todos/' + todo._id,
            data: {
                description: todo.description,
                complete: newComplete
            }
        }).then(function(response){
            controller.getTodos();
        }, function(error){

        });

    }

    this.getTodos = function(){
        $http({
            method:'GET',
            url: '/todos'
        }).then(function(response){
            controller.todos = response.data;
        },function(error){

        });
    }
    this.getTodos();

}]);
