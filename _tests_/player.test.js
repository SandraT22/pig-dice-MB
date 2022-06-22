import Player from '../src/player.js';

describe('Player', () => {  

  test('should correctly create a player object with name, score, and turn', () => {     
    const player1 = new Player("player-1", 0, true);     
    expect(player1.name).toEqual("player-1");     
    expect(player1.score).toEqual(0);     
    expect(player1.turn).toEqual(true);   
  }); 
});

test('should correctly add the total roll points to the score', () => {
  const player1 = new Player("player-1", 6, true);
  expect(player1.addScore(20)).toEqual(26);
});