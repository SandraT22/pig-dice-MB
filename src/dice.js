export function Dice (sides) {
  this.sides = sides;
}

Dice.prototype.roll = function() {
  let roll =  Math.floor(Math.random() * this.sides) + 1;
  return roll; 
};
