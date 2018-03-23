console.log("Castle Battle!");

var elementHider = function(elm){
  document.getElementById(elm).style.display="none";
}

var elementShow = function(elm){
  document.getElementById(elm).style.display="block";
}
var displayText = function(elm, text){
  console.log("displayText");
  document.getElementById(elm).innerHTML = text;
}

var Player = function(){
  var computer;
  var name="";
  var Barracks={};
  var hitPoints=10;
  this.getHP = function(){
    return hitPoints;
  }
  this.getHit = function(){
    var randHP=Math.floor(Math.random()*3);
    hitPoints-=randHP;
  }
  this.repair = function(){
    var randHP=Math.floor(Math.random()*3);
    hitPoints+=randHP;
    if(hitPoints>10){
      hitPoints=10;
    }
  }
  this.getName = function(){
    return name;
  }
  this.setName = function(input){
    // var input=prompt("Enter your name.  Enter 'computer' to set player to computer", "");
    name = input.toString();
    console.log(name);
    if(name.toLowerCase()=="computer"){
      computer=true;
    }
  }
  this.isComputer = function(){
    return computer;
  }
}

var Game = {
  attacker: function(){},
  defender: function(){},
  player1: function(){},
  player2: function(){},
  initialize: function(){
    player1 = new Player;
    player2 = new Player;
    player1.Barracks = new Barracks;
    player2.Barracks = new Barracks;
    var form = document.getElementById("names")
    player1.setName(document.getElementById("names").elements[0].value);
    player2.setName(document.getElementById("names").elements[1].value);
    elementHider("names");
    this.attacker=player1;

  },
  startUp: function(){
    elementHider("play");
    elementShow("names");
  },
  play: function(){
    while(player1.getHP()>0 && player2.getHP()>0){
      this.status();
      // this.turn(player1, player2);
      if(player2.getHP()>0){
        this.status();

        // this.turn(player2, player1);
      }
    }
    if(player1.getHP()>0){
      console.log("Congratulations "+player1.getName()+"! You win");
    }else{
      console.log("Congratulations "+player2.getName()+"! You win");
    }
    elementShow("play");
  },
  status: function(){
    elementShow("choices");
    elementShow("status");
    displayText("status", this.attacker.getName()+" Status:  Hit Points Remaining: "+this.attacker.getHP()+" Peons: "+this.attacker.Barracks.peons.length);
  },

  turn: function(attacker, defender){
    console.log("====="+attacker.getName()+"=====");
    console.log("=====STATUS=====");
    console.log("Hit Points Remaining: "+attacker.getHP());
    console.log("Peons: "+attacker.Barracks.peons.length);
    console.log("================");
    if(!attacker.isComputer()){
      // var input=prompt(attacker.getName()+", What do you want to do?", "1-Create Peon, 2-Select Peon");
      if(input==1){
        attacker.Barracks.generatePeon(attacker.isComputer());
      }else if(input==2){
        console.log("=====Displaying Peons=====")
        for(var i=0; i<attacker.Barracks.peons.length; i++){
          console.log("===== PEON "+(i+1)+" =====")
          attacker.Barracks.peons[i].showPeon();
          console.log("=====================");
        }
        var input=prompt("Select your peon", "");
        var setJob=prompt("What job would you like your Peon to do?", "1-Attack, 2-Repair");
        if(setJob==1){
          attacker.Barracks.peons[input-1].setJob("Attack");
        }else if(setJob==2){
          attacker.Barracks.peons[input-1].setJob("Repair");
        }
      }
    }else{
      for(var i=0; i<attacker.Barracks.peons.length; i++){
        console.log("===== PEON "+(i+1)+" =====")
        attacker.Barracks.peons[i].showPeon();
        console.log("=====================");
      }
      if(attacker.Barracks.unemployedPeons()==0){
        attacker.Barracks.generatePeon(attacker.isComputer());
      }else{
        var decider = Math.random();
        var job="";
        if(decider>.5){
          job = "Attack";
        }else{
          job = "Repair"
        }
        attacker.Barracks.peons[attacker.Barracks.peons.length-1].setJob(job);
      }
    }
    for(var i=0; i<attacker.Barracks.peons.length; i++){
      attacker.Barracks.peons[i].work(attacker, defender);
    }
  }
}

var Barracks = function(){
  this.peonNames=['Dave','Stuart','Bob','Jerry','Carl','Kevin','Tim','Mark','Phil','John','Josh','Steve','Donny','Ken','Mike','Paul','Lance','Larry','Jorge','Tom','Norbert','Chris','Darwin'];
  this.peons=[];
  this.generatePeon= function(auto){
    var setName="";
    newPeon = new Peon();
    if(!auto){
      setName=prompt("What would you like to name your Peon?", "");
    }else{
      var selPeon=Math.floor(Math.random()*this.peonNames.length)
      setName=this.peonNames[selPeon];
      this.peonNames.splice(selPeon,1);
    }
    newPeon.setName(setName);
    this.peons.push(newPeon);
    return newPeon;
  }
  this.unemployedPeons = function(){
    var unemployedPeons = 0;
    for(var i=0; i<this.peons.length; i++){
      if(this.peons[i].getJob()==""){
        unemployedPeons++;
      }
    }
    return unemployedPeons;
  }
}

var Peon = function(){
  var name="";
  var job="";
  this.setJob=function(setJob){
    job=setJob;
  }
  this.setName=function(setName){
    name=setName;
  }
  this.work=function(attacker, defender){
    if(job.toLowerCase()=="attack"){
      defender.getHit();
    }else if(job.toLowerCase()=="repair"){
      attacker.repair();
    }
  }
  this.showPeon=function(){
    console.log("Name: "+name);
    console.log("Job: "+job);
  }
  this.getJob=function(){
    return job;
  }
}


// Game.play();
