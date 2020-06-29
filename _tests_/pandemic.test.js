import { Game } from './../src/pandemic.js';

describe ('Game', () => {
  
  test ('should randomly roll a number 1 through 6', () =>  {
    let newGame = new Game();
    let roll = newGame.rollDice();
    expect(roll).toBeGreaterThan(0);
    expect(roll).toBeLessThan(7);
  });
  //check to instantiate the game 

  //even reduces infection

  //odd increases infection rate
});


