var app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    var controller = this;

    this.createTodo = function(){
        $http({
            method:'POST',
            url: 'http://localhost:3000/todos',
            data: {
                description: this.description,
                complete: this.complete
            }
        }).then(function(response){
            controller.getTodos();
        }, function(){
            console.log('error');
        });
    };

    this.getTodos = function(){
        $http({
            method:'GET',
            url: 'http://localhost:3000/todos',
        }).then(function(response){
            controller.todos = response.data;
        }, function(){
            console.log('error');
        });
    };

    this.updateTodo = function(todo){
        if(todo.complete === true){
            var newComplete = false;
        } else {
            var newComplete = true;
        }

        $http({
            method:'PUT',
            url: 'http://localhost:3000/todos/' + todo._id,
            data: {
                description: todo.description,
                complete: newComplete
            }
        }).then(function(response){
            controller.getTodos();
        }, function(){
            console.log('error');
        });
    }

    this.getTodos();
}]);
