// const MAX_ROUND = 5;
const winCondition = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

let playerScore = 0;
let computerScore = 0;

const playRound = (playerSelection) => { 

  const computerSelection = computerPlay();
  let roundWinner = '';

  if (playerSelection === computerSelection) {
    roundWinner = 'tie';
  } else if (winCondition[playerSelection] === computerSelection) {
    roundWinner = 'player';
  } else {
    roundWinner = 'computer';
  }

  return roundWinner;
};

const computerPlay = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

// UI

const buttons = Array.from(document.querySelectorAll('.btn'));
const roundResult = document.querySelector('.round-result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

const updateScore = (roundWinner) => {

  if (roundWinner === 'tie') {
    roundResult.textContent = 'It\'s a Tie!';
  } else if (roundWinner === 'player') {
    roundResult.textContent = 'You Win!';
    playerScore++;
  } else if (roundWinner === 'computer') {
    roundResult.textContent = 'You Lose!';
    computerScore++;
  }

  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
};

const clickHandler = (e) => {
  const playerSelection = e.target.value.toLowerCase(); // change later

  const roundWinner = playRound(playerSelection);
  updateScore(roundWinner);
};

buttons.forEach((button) => {
  button.addEventListener('click', clickHandler);
})

console.log(buttons)