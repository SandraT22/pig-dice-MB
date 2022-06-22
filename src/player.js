export function Player(name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

Player.prototype.addScore = function(totalRollPoints) {
  this.score += totalRollPoints;
};

Player.prototype.winCondition = function() {
  if (this.score >= 50) {
    return true;
  }
  return false;
};