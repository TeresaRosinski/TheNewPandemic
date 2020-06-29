export class Game {
  constructor() {
    //this.infectionRate = 25;  // percentage?
    //this.gameTimer = 300; // Seconds
    //this.phaseClock = 60; // Count down for next phase
    //this.won = false; //game winning status
  }
  
  rollDice() {
    let roll = (1 + Math.floor(Math.random() * 6));
    /*if (roll % 2 == 0)  {
      this.infectionRate - roll;   
    } else  {
      this.infectionRate + roll;
    }
    return this.infectionRate; */
    return roll; 
  }
}




//Inside of Game Class
//Initial infection rate
//Total Game Time = 5 minutes / 300 seconds
//60 Second interval time ==> phase clock
//Game Lost Status: false
//Game Won Status: false