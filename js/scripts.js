// Business Logic for Player —————————

function Player(name, score, turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

Player.prototype.addScore = function(totalRollPoints) {
  this.score += totalRollPoints;
};

// Business Logic for Dice —————————

function Dice (sides) {
  this.sides = sides;
}

function quitTurn(player1, player2, turnNumber, totalRollPoints) {
  if (turnNumber % 2 === 1) {
    player1.addScore(totalRollPoints);
    player1.turn = false;
    player2.turn = true;
    $("#player-name").text(player2.name);
  } else {
    player2.addScore(totalRollPoints);
    player1.turn = true;
    player2.turn = false;
    $("#player-name").text(player1.name);
  }
  $("#player-1-points").text(player1.score);
  $("#player-2-points").text(player2.score);
}

Dice.prototype.roll = function() {
  let roll =  Math.floor(Math.random() * this.sides) + 1;
  return roll; 
};

Dice.prototype.addPoints = function(totalRollPoints, rollValue) {
  totalRollPoints = totalRollPoints + rollValue;
  return totalRollPoints;
};

// UI Logic —————————

$(document).ready(function(){
  let player1 = new Player ("Player-1", 0, true);
  let player2 = new Player ("Player-2", 0, false);
  let dice1 = new Dice (6);
  let turnNumber = 1;
  let totalRollPoints = 0;

  $("#player-name").text(player1.name);

  $("#roll").click(function() {
    let rollValue = dice1.roll();
    $("#rollValue").text(rollValue);
    totalRollPoints = dice1.addPoints(totalRollPoints, rollValue);
    if (rollValue === 1) {
      totalRollPoints = 0;
      quitTurn(player1, player2, turnNumber, totalRollPoints);
      turnNumber++;
    }
    $("#roll-total").text(totalRollPoints);
  });

  $("#quit").click(function(){
    quitTurn(player1, player2, turnNumber, totalRollPoints);
    totalRollPoints = 0;
    turnNumber++;
  });
});
