import { Game } from './../src/pandemic.js';

describe ('Game', () => {
  
  test ('should randomly roll a number 1 through 6', () =>  {
    let newGame = new Game();
  
    expect(newGame.rollDice()).toBe(randomNumber);
  });
});


