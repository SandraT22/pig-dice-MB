
// Business Logic for Player —————————

function Player(name, score, turn) {
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

// Business Logic for Dice —————————

function Dice (sides) {
  this.sides = sides;
}

Dice.prototype.roll = function() {
  let roll =  Math.floor(Math.random() * this.sides) + 1;
  return roll; 
};

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

// UI Logic —————————

$(document).ready(function(){
  let player1 = new Player ("Player-1", 0, true);
  let player2 = new Player ("Player-2", 0, false);
  let dice1 = new Dice (6);
  let dice2 = new Dice (6);
  let turnNumber = 1;
  let totalRollPoints = 0;

  $("#player-name").text(player1.name);

  $("#roll").click(function() {
    let roll1 = dice1.roll();
    let roll2 = dice2.roll();
    let rollValue = roll1 + roll2;
    $("#rollValue").text(roll1 + "," + roll2);
    totalRollPoints = totalRollPoints + rollValue;
    if (roll1 === 1 || roll2 === 1) {
      totalRollPoints = 0;
      alert("You rolled a 1, now it's the other player's turn!");
      quitTurn(player1, player2, turnNumber, totalRollPoints);
      turnNumber++;
    }
    $("#roll-total").text(totalRollPoints);
  });

  $("#quit").click(function(){
    quitTurn(player1, player2, turnNumber, totalRollPoints);
    if (player1.winCondition() === true) {
      alert(player1.name + " is the winner!");
    } else if (player2.winCondition() === true) {
      alert(player2.name + " is the winner!");
    } else {
      alert("You earned " + totalRollPoints + " this round!");
      totalRollPoints = 0;
      turnNumber++;
    }
  });
});
