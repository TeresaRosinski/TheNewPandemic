import { Game } from './../src/pandemic.js';

describe ('Game', () => {
  
  test ('should randomly roll a number 1 through 6', () =>  {
    let newGame = new Game();
    let roll = newGame.rollDice();
    expect(roll).toBeGreaterThan(0);
    expect(roll).toBeLessThan(7);
  });
  //check to instantiate the game 
  test('should instantiate a new Game', () => {
    let newGame = new Game(); 
    expect(newGame).toEqual({infectionRate: 25, gameTimer: 300, phaseClock: 60, won: false, lost: false});
  });

  //even reduces infection

  //odd increases infection rate
});


