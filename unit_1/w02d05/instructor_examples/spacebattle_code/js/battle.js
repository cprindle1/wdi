console.log('ok');

// game object
var game = {
  playerShip: null,
  alienShips: [],
  currentAlienShipNum: 1,
  checkWinner: function() {
    if (this.playerShip.hull > 0) {
      console.log("%c YOU DESTROYED THE SHIP!", "background-color: black; color: white; font-size: 30px");
      console.log("%c Hull remaining: " + this.playerShip.hull, "background-color: cornflowerblue; color: white; font-size: 30px");
      this.currentAlienShipNum++;
      if (this.alienShips.length == 0) {
        console.log("%c Congrats!! You saved the Earth from the alien fleet.", "background-color: yellow; font-size: 40px;");
      } else {
          this.chooseStrategy();
      }

    } else {
      console.log("%c You lost.", "background-color: green; color: yellow");
    }
  },
  chooseStrategy: function() {
    var input = prompt("There are " + this.alienShips.length + " alien ships! Will you (a)ttack or (r)etreat?");

    if (input == "a") {
      this.runBattle();
    } else {
      console.log("You retreated.");
    }
  },
  runBattle: function() {
    console.log('==============================');
    console.log('%c ATTACKING ALIEN SHIP NUMBER: ' + this.currentAlienShipNum, 'color: red; font-size: 20px');
    console.log('==============================');

    var currentAlienShip = this.alienShips.pop();

    while (this.playerShip.hull > 0 && currentAlienShip.hull > 0) {

      this.playerShip.attack(currentAlienShip);

      if (currentAlienShip.hull > 0) {
        currentAlienShip.attack(this.playerShip);
      }
    }
    this.checkWinner();
  },
  generatePlayerShip: function() {
    this.playerShip = {
      name: "USS Schwarzenegger",
      hull: 20,
      shields: 0,
      missiles: 0,
      accuracy: .7,
      firepower: 5,
      targetingLaser: false
    }

    // method for the Player's ship
    this.playerShip.attack = function(target) {
      console.warn('You are attacking the target: ', target);
      console.log('Your accuracy: ', this.accuracy);
      console.log("Your firepower: ", this.firepower);
      console.log("Your hull: ", this.hull);
      if (this.accuracy < Math.random()) {
        target.hull -= this.firepower;
        console.error("Target hit! ", target);
        console.log("You did " + this.firepower + " damage!!");
      } else {
        console.log("%c You missed!!", "color: orange");
      }
    }
  },
  generateAlienShips: function() {
    // constructor for alien ships
    var AlienShip = function() {
      this.hull = Math.floor(Math.random() * 4) + 3;
      var accuracies = [0.6, 0.7, 0.8];
      this.accuracy = accuracies[Math.floor(Math.random() * accuracies.length)];
      this.firepower = Math.floor(Math.random() * 3) + 2;
    }

    // method for each constructed alien ship
    AlienShip.prototype.attack = function(target) {
      console.warn("The alien is attacking you!");
      console.log("Alien's accuracy: ", this.accuracy);
      console.log("Alien's firepower: ", this.firepower);
      if (this.accuracy < Math.random()) {
        target.hull -= this.firepower;
        console.error("You have been hit! ", target);
        console.log("The alien did " + this.firepower + " damage!!");
      } else {
        console.log("%c The alien missed . . .", "color: orange");
      }
    }

    // populate the alienShips array with constructed alien ships
    for (var i=1; i <= 6; i++) {
      this.alienShips.push(new AlienShip());
    }
  },
  startGame: function() {
    this.generatePlayerShip();
    this.generateAlienShips();
    this.chooseStrategy();
  },
}

game.startGame();
