// Written by Matt Huntington 2017

var Peon = function(name){
    this.job = Peon.jobs[0];
    this.getName = function(){
        return name;
    }
}
Peon.jobs = ['nothing', 'repair', 'attack'];

var Barracks = function(){
    var peons = [];
    this.getPeons = function(){
        return peons;
    };
    this.generatePeon = function(name){
        var newPeon = new Peon(name);
        peons.push(newPeon);
        return newPeon;
    };
    this.getPeonByName = function(name){
        for (var i = 0; i < peons.length; i++) {
            if(peons[i].getName() === name){
                return peons[i];
            }
        }
    }
}

var Player = function(name){
    var hitPoints = 10;

    this.barracks = new Barracks();
    this.takeDamage = function(){
        hitPoints--;
    }
    this.repair = function(){
        hitPoints++;
    }
    this.getHitPoints = function(){
        return hitPoints;
    }
    this.getName = function(){
        return name;
    }
}

var player = new Player("Player");
var cpu = new Player("CPU");

var getPeonNames = function(){
    var peonString = "";
    for(var i = 0; i < player.barracks.getPeons().length; i++){
        peonString += player.barracks.getPeons()[i].getName() + " (" + player.barracks.getPeons()[i].job + ")" + "\n";
    }
    return peonString;
}

var showStatus = function(){
    alert("Your hit points: " + player.getHitPoints());
    alert("Enemy hit points: " + cpu.getHitPoints());
    if(player.barracks.getPeons().length > 0){
        var peonString = "Your peons: \n";
        peonString += getPeonNames();
        alert(peonString);
    }
}

var startTurn = function(){
    askForChoice();
}

var goCPU = function(){
    var action = Math.floor(Math.random()*3);
    if(action === 0){ //nothing
        alert("Enemy does nothing");
        return;
    } else if(action === 1){ //repair
        alert("Enemy repairs itself");
        cpu.repair();
    } else { //attack
        alert("Enemy attacks!")
        player.takeDamage();
    }
}

var endTurn = function(){
    for (var i = 0; i < player.barracks.getPeons().length; i++) {
        if(player.barracks.getPeons()[i].job == Peon.jobs[1]){//repair
            player.repair();
        } else if(player.barracks.getPeons()[i].job == Peon.jobs[2]){//attack
            cpu.takeDamage();
        }
    }
    goCPU();
    if(cpu.getHitPoints() <= 0 && player.getHitPoints() <= 0){
        alert('It\'s a tie!');
    } else if(cpu.getHitPoints() <= 0){
        alert('You win!');
    } else if(player.getHitPoints() <= 0) {
        alert('You lose!');
    } else {
        startTurn();
    }
}

var askForChoice = function(){
    showStatus();
    var answer = prompt("What do you want to do?\n 1: create peon \n 2: select peon");
    if(answer === '1'){
        var peonName = prompt("What do you want the name to be?");
        player.barracks.generatePeon(peonName);
        endTurn();
    } else if(answer === '2'){
        var peonName = prompt("Which peon do you want?\n" + getPeonNames());
        var peon = player.barracks.getPeonByName(peonName);
        var peonAction = prompt("What do you want " + peon.getName() + " to do?", "attack / repair");
        if(peonAction === 'attack'){
            peon.job = Peon.jobs[2];
        } else if(peonAction === 'repair') {
            peon.job = Peon.jobs[1];
        }
        endTurn();
    }
}

var start = function(){
    startTurn();
}

start();
