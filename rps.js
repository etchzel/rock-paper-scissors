// const MAX_ROUND = 5;
// const hand = ['rock', 'paper', 'scissors'];
const winCondition = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

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

export default playRound;