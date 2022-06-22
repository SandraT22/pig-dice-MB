export function quitTurn(player1, player2, turnNumber, totalRollPoints) {
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