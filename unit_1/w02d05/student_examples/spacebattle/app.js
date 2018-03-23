console.log("Space Battle!");

var Ship = function(initName, initFirepower, initAccuracy, initHull, initShieldGen, initMissEquip){
  var name = initName;
  var firepower = initFirepower;
  var accuracy  = initAccuracy;
  var hull = initHull;
  var shieldGen = initShieldGen;
  var missles = initMissEquip;

  this.attack = function(target){//executes attack on other ships
    var shot = Math.random();
    var tempHp=0;
    var tempAcc = 0;
    if(missles>0){
      var input=prompt("Would you like to attack with missles?", "1. Yes, 2. No");
      if(input==1){
        tempHp=5;
        missles--;
        tempAcc=.2;//missles are 20% more accurate than standard weapons
      }
    }
    if(shot<accuracy+tempAcc){
      target.takeHit(firepower+tempHp);
      console.log(name+" Fires: Hit");
    }else{
      console.log(name+" Fires: Miss");
    }
  }
  this.getShip = function(){//log ship info
    console.log("Name: "+name);
    console.log("Firepower: "+firepower);
    console.log("Accuracy: "+accuracy);
    console.log("Hull: "+hull);
    if(shieldGen){
      console.log("Shield: This ship can generate up to 33% of it's hull strength during battle")
    }
    if(missles>0){
      console.log("Missles: "+missles);
    }

  }
  this.destroyed = function(){//returns true or false if the ship has been destroyed
    if(hull>0){
      return false;
    }else{
      return true;
    }
  }
  this.takeHit = function(hp){//damages the ship during battle
    var sheild=0;
    if(shieldGen){
      sheild=Math.round((Math.floor(Math.random()*(hull+1))/3));//sheilds can generate up to 33% of hull
      console.log("Ship has generated "+sheild+" sheilds.")
      if(sheild<hp){
        hull-=(hp-sheild);
      }
    }else{
      hull-=(hp);
    }
  }
}

var ShipFactory = {//builds alien ships
  ships:[],//all ships built by factory
  buildShip: function(round){
    var initFirepower = Math.floor((Math.random()*3)+2);
    var initHull = Math.floor((Math.random()*4)+3)*round;
    var initAccuracy = Math.floor((Math.random()*3)+6)/10;

    var newShip = new Ship("Alien"+(this.ships.length+Math.floor(Math.random()*1000)), initFirepower, initAccuracy, initHull, false, 0);
    this.ships.push(newShip);
    return newShip;
  }
}

var player = {//keep track of player stats throughout game
  ship:{},
  points: 0,
  shipsDestroyed: 0,
  roundsWon: 0
}

var game = {
  rounds: 0,
  alienShips: [],
  initialize: function(round){ //builds ships to battle.  takes round as an argument.  ship health is initialized to starting hull strength * round
    player.ship = new Ship("USS Schwarzenegger", 5, .7, 20*round, true, 5);
    for(var i=0; i<Math.floor(Math.random()*15)+5; i++){
      this.alienShips.push(ShipFactory.buildShip(round));
    }
  },
  cont: true,
  battle: function(){ //execute battle sequence
    console.log("Battle!");
    console.log("==========================");
    player.ship.getShip();
    for(var i=0; i<this.alienShips.length; i++){
      console.log("ID: "+(i+1));
      this.alienShips[i].getShip();
    }
    var input=prompt("What alien ship do you want to attack?", "1-"+this.alienShips.length);
    console.log("==========================");
    while(!player.ship.destroyed() && !this.alienShips[input-1].destroyed() && this.cont){
      player.ship.attack(this.alienShips[input-1]);
      if(!this.alienShips[input-1].destroyed()){
        this.alienShips[input-1].attack(player.ship);
        if(player.ship.destroyed()){
          return false;
        }
      }else{
        console.log("Alien Ship Destroyed");
        this.alienShips.splice(input-1, 1);
        player.shipsDestroyed++;
        player.points++;
        return true;
      }
      var input=prompt("What would you like to do?", "1. Attack!, 2. Retreat");
      if(input==2){
        this.retreat();
      }
    }

  },
  retreat: function(){
    console.log("Seriously?!?! Fine, quit!");
    this.cont=false;
    player.points-=10;
  },
  play: function(){
    var again=true;
    var input="";
    var currentRound=1;
    var rounds=prompt("How many rounds would you like to play?", "");
    while(again && rounds>=currentRound){
      this.cont=true;
      this.initialize(currentRound);
      console.log("Player has "+player.points+" points, "+player.shipsDestroyed+" ships destroyed, and "+player.roundsWon+" rounds won.")
      console.log("Round "+currentRound);
      console.log("Aliens are attacking earth!  They have sent "+this.alienShips.length+" ships to destroy the planet!");

      while(this.cont){
        input=prompt("What would you like to do?", "1. Battle!, 2. Retreat");
        if(input == 1){
          if(game.battle()){
            console.log("You won the battle");
            console.log("There are "+this.alienShips.length+" remaining.")
            player.ship.getShip();
            if(this.alienShips.length==0){
              console.log("You have destroyed all Alien Ships");
              this.cont=false;
            }
          }else if(this.cont){
            console.log("Your ship was destroyed");
            this.cont=false;
          }
        }else if(input == 2){
          again=false;
          game.retreat();
        }
      }
      if(!player.ship.destroyed()){
        currentRound++;
        player.roundsWon++;
        player.points+=10;
      }else{
        input=prompt("Would you like to play again?", "1. Yes!, 2. No");
        if(input==2){
          again=false;
        }
      }
    }
  }
}

game.play();
