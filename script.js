const MAX_ROUND = 5;
const winCondition = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}
const hand = ['rock', 'paper', 'scissors']

function playRound(playerSelection, computerSelection) {
  let roundResult;

  if (playerSelection === computerSelection) {
    roundResult = "You Tie!";
  } else if (winCondition[playerSelection] === computerSelection) {
    roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  return roundResult;
}

function computerPlay() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playerPlay() {
  let selection = prompt('What hand are you gonna play?');
  if (selection === null) {
    alert('Input cancelled');
    return null;
  } else if (!hand.includes(selection.toLowerCase())) {
    alert('Invalit input. Only Rock/Paper/Scissors');
    return null;
  } else {
    return selection.toLowerCase();
  }
}

function game() {
  let round = 0;
  while (round < MAX_ROUND) {
    const playerSelection = playerPlay();
    if (playerSelection === null) {
      console.log('Match stopped due to invalid input');
      return 0;
    }
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    round++;
  }
}

game();