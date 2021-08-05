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
  };

  playerSign.classList = `fas fa-hand-${playerSelection} active`;
  computerSign.classList = `fas fa-hand-${computerSelection} active`;
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
  };
};

// UI

const buttons = Array.from(document.querySelectorAll('.btn'));
const roundResult = document.querySelector('.round-result');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const playerSign = document.querySelector('#playerSign');
const computerSign = document.querySelector('#computerSign');
const startBtn = document.querySelector('.start');
const gameScreen = document.querySelector('.modal-container');
const gameScreenContent = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const endMessage = document.querySelector('.end-message');
const endScreen = document.querySelector('.end-modal');
const endPlayerScore = document.querySelector('.end-modal > .score-container > .player-score');
const endComputerScore = document.querySelector('.end-modal > .score-container > .computer-score')
const restartBtn = document.querySelector('.btn-restart');

const updateScore = (roundWinner) => {

  if (roundWinner === 'tie') {
    roundResult.textContent = 'It\'s a Tie!';
  } else if (roundWinner === 'player') {
    roundResult.textContent = 'You Win!';
    playerScore++;
  } else if (roundWinner === 'computer') {
    roundResult.textContent = 'You Lose!';
    computerScore++;
  };

  if(matchOver()) {
    endScreen.classList.add('active');
    gameScreenContent.classList.add('active');
    endPlayerScore.textContent = `Player: ${playerScore}`;
    endComputerScore.textContent = `Computer: ${computerScore}`;
  } else {
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  };
};

const matchOver = () => {
  if (playerScore === 5) {
    endMessage.textContent = 'Match over! You win!';
    return true;
  } else if (computerScore === 5) {
    endMessage.textContent = 'Match over! You lose!';
    return true;
  };
  return false;
};

const selectionClick = (e) => {
  const playerSelection = e.target.value.toLowerCase();
 
  const roundWinner = playRound(playerSelection);
  updateScore(roundWinner);
};

const closeClick = () => {
  gameScreen.classList.remove('active');
  startBtn.classList.remove('hidden');
};

const removeModal = () => {
  playerSign.classList.remove('active');
  computerSign.classList.remove('active');
  endScreen.classList.remove('active');
  gameScreenContent.classList.remove('active');
};

const restartGameState = () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  roundResult.textContent = 'Score';
  removeModal();
};

const displayGame = () => {
  restartGameState();
  gameScreen.classList.add('active');
  startBtn.classList.add('hidden');
};

buttons.forEach((button) => {
  button.addEventListener('click', selectionClick);
});

startBtn.addEventListener('click', displayGame);
closeBtn.addEventListener('click', closeClick);
restartBtn.addEventListener('click', restartGameState);
