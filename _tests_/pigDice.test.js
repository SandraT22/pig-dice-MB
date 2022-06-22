import Player from './../src/player.js';
// import Dice from './../src/dice.js';

describe('Player', () => {  

  test('should correctly create a player object with name, score, and turn', () => {     
    const player1 = new Player("player-1", 0, true);     
    expect(player1.name).toEqual("player-1");     
    expect(player1.score).toEqual(0);     
    expect(player1.turn).toEqual(true);   
  }); 
});