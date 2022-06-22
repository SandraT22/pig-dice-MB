import { Dice } from '../src/dice.js';

describe('Dice', () => {

  test('should correctly create a dice object with sides',() => {
    const dice1 = new Dice(6);
    expect(dice1.sides).toEqual(6);
  });
});