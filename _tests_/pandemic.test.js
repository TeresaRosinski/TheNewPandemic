import { Game } from './../src/pandemic.js';

describe ('Game', () => {
  let newGame = new Game();
  
  test ('should randomly roll a number 1 through 6', () =>  {
    let roll = newGame.randomRoll();
    expect(roll).toBeGreaterThan(0);
    expect(roll).toBeLessThan(7);
  });
  //check to instantiate the game 
  test('should instantiate a new Game', () => {
    expect(newGame).toEqual({infectionRate: 25, gameTimer: 300, phaseClock: 60, won: false, lost: false});
  });
  test('Should add roll amount to the infectionRate when roll is odd number', ()  =>  {
    expect(newGame.playerTurn(5)).toEqual(30);
  });
  test('Should show that even rolled numbers subtract that amount from infectionRate', () =>  {
    expect(newGame.playerTurn(6)).toEqual(19);
  });
  //matcher that measures effects

  //odd increases infection rate
});


