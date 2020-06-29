export class Game {
  constructor() {
    this.infectionRate = 25;  // percentage?
    this.gameTimer = 300; // Seconds
    this.phaseClock = 60; // Count down for next phase
    this.won = false; //game winning status
    this.lost = false; //game lost
  }
  
  playerRound() {
    return this.playerTurn(this.randomRoll());
  }

  randomRoll () {
    return (1 + Math.floor(Math.random() * 6));
  }

  playerTurn(roll) {
    if (this.gameTimer>=240 && roll % 2 == 0)  {
      return this.infectionRate - roll;   
    } else if(this.gameTimer >=240 && roll % 2 !== 0)  {
      return this.infectionRate + roll;
    }
  }
  
  timeTracker () {
    setInterval(() => {
      this.gameTimer--;
    }, 1000);
  } 
}
/*
export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
}


//Inside of Game Class
//Initial infection rate
//Total Game Time = 5 minutes / 300 seconds
//60 Second interval time ==> phase clock
//Game Lost Status: false
//Game Won Status: false
*/