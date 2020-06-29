export class Game {
  constructor() {
    this.infectionRate = 25;  // percentage?
    this.gameTimer = 300; // Seconds
    this.phaseClock = 60; // Count down for next phase
    this.won = false; //game winning status
    this.lost = false; //game lost
  }
  randomRoll () {
    return (1 + Math.floor(Math.random() * 6));
  }

  playerTurn(roll) {
    if (roll % 2 == 0)  {
      return this.infectionRate - roll;   
    } else  {
      return this.infectionRate + roll;
    }
  }
}




//Inside of Game Class
//Initial infection rate
//Total Game Time = 5 minutes / 300 seconds
//60 Second interval time ==> phase clock
//Game Lost Status: false
//Game Won Status: false