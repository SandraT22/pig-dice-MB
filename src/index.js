import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Player } from './player.js'
import { Dice } from './dice.js'

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
