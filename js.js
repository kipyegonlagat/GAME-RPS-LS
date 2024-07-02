let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (
    (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
  ) {
    playerScore++;
    return 'player wins';
  } else {
    computerScore++;
    return 'computer wins!';
  }
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  document.getElementById('winner-announcement').innerHTML = result;
  document.getElementById('player-choice-emoji').textContent = getEmoji(playerChoice);
  document.getElementById('computer-choice-emoji').textContent = getEmoji(computerChoice);
  updateScores();
}

function getEmoji(choice) {
  switch (choice) {
    case 'rock':
      return '✊';
    case 'paper':
      return '✋';
    case 'scissors':
      return '✌️';
    case 'lizard':
      return '🦎';
    case 'spock':
      return '🖖';
    default:
      return '';
  }
}

function updateScores() {
  document.getElementById('scores').textContent = `Computer ${computerScore} - ${playerScore} Player`;
}

document.getElementById('rock-btn').addEventListener('click', function () {
  playGame('rock');
});

document.getElementById('paper-btn').addEventListener('click', function () {
  playGame('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function () {
  playGame('scissors');
});

document.getElementById('lizard-btn').addEventListener('click', function () {
  playGame('lizard');
});

document.getElementById('spock-btn').addEventListener('click', function () {
  playGame('spock');
});
