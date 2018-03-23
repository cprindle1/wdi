// var answer = null;
//
// while(answer !== "stop"){
//     answer = prompt("What do you want to do?", "your answer goes here");
// }

// var func1 = function(){
//     alert('hi');
// }
// var func2 = function(){
//     console.log('hello');
// }
// func1();
// func2();
// var greet = function(){
//     console.log("Hi!");
// }
// var sayBye = function(){
//     console.log("Bye!");
// }
// var answer = prompt('Are you arriving or leaving?', 'arriving or leaving?');
//
// if(answer === "arriving"){
//     greet();
// } else if (answer === "leaving"){
//     sayBye();
// }

// var myFunc = function(){
//     console.log(i);
// }
// for(var i = 0; i < 10; i++){
//     myFunc();
// }

// var myFunc = function(){
//     for(var i = 0; i < 10; i++){
//         console.log(i);
//     }
// }
// myFunc();

// var func1 = function(){
//     console.log('hello');
// }
// var func3 = function(){
//     console.log('f3');
// }
// var func2 = function(){
//     console.log('oh hai');
//     func1();
//     func3();
// }
// func2();

// var func1 = function(){
//     console.log(1);
//     func2(); //why can I call this now, even though the definition is below?
//     func3();
//     console.log('Finished!');
// }
// var func2 = function(){
//     console.log(2);
//     func4();
//     func6();
// }
// var func3 = function(){
//     console.log(3);
//     func5();
// }
// var func4 = function(){
//     console.log(4);
// }
// var func5 = function(){
//     console.log(5);
// }
// var func6 = function(){
//     console.log(6);
// }
// func1();

var apples;
var money;

var start = function(){
    apples = 0;
    money = 20;
    askForAction();
}

var showStatus = function(){
    alert("You have " + apples + " apples and $" + money);
}

var buyApple = function(){
    money -= 1;
    apples++;
    askForAction();
}

var eatApple = function(){
    apples--;
    askForAction();
}

var askForAction = function(){
    showStatus();
    var choice = prompt("What do you want to do?", "buy apple/eat apple/restart/end");
    if(choice === "buy apple"){
        buyApple();
    } else if(choice === "eat apple"){
        eatApple();
    } else if(choice === "restart"){
        start();
    } else if(choice === "end") {
        alert('goodbye!');
    }
}

start();
