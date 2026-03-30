let rpsArray = ["✊", "✋", "✌️"];
let userScore = 0;
let cpuScore = 0;

function randomcomputerChoiceGenerator(range) {
  return Math.round(Math.random() * range);
}

function processGame(playerChoice) {
  const computerChoice = rpsArray[randomcomputerChoiceGenerator(2)];

  const isDraw = computerChoice === playerChoice;
  const isPlayerWin =
    (playerChoice === "✊" && computerChoice === "✌️") ||
    (playerChoice === "✋" && computerChoice === "✊") ||
    (playerChoice === "✌️" && computerChoice === "✋");

  if (isDraw) {
    alert(`It's a draw! Both chose ${playerChoice}`);
  } else if (isPlayerWin) {
    userScore++;
    alert(`You win this round! ${playerChoice} beats ${computerChoice}`);
  } else {
    cpuScore++;
    alert(`Computer wins this round! ${computerChoice} beats ${playerChoice}`);
  }

  document.getElementById("user-score").innerText = userScore;
  document.getElementById("cpu-score").innerText = cpuScore;
}

