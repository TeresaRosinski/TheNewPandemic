import { Game } from './../src/pandemic.js';

describe ('Game', () => {
  jest.useFakeTimers();
  let newGame = new Game();

  afterEach(function() {
    jest.clearAllTimers();
  });
  
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
  test('Should show that the round function calls on playerTurn function with randomRoll() as the argument', () =>  {
    expect(newGame.playerRound()).toBeGreaterThan(18);
    expect(newGame.playerRound()).toBeLessThan(32);
  });

  /*
  test('should decrement the gametimer by 1 every second',() => {
    newGame.timeTracker();
    jest.advanceTimersByTime(1000);
    expect(newGame.gameTimer).toEqual(299);
  });
  */
  test('should decrement the gametimer by 5 every 5 seconds', () => {
    newGame.timeTracker();
    jest.advanceTimersByTime(5000);
    expect(newGame.gameTimer).toEqual(295); 
  });
});


