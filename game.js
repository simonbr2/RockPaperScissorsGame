let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
const banner = document.querySelector("#banner");
banner.textContent = "Good Luck!!"

const buttons = document.querySelectorAll('.button')

function computerPlay(){
  let options = ['rock', 'paper', 'scissors'];
  let computerSelection = (options[Math.floor(Math.random()*options.length)])
  return computerSelection;
}

function playerSelectionPrompt(){
  let playerSelectionPrompt = window.prompt("Rock, Paper, or Scissors?");
  let playerSelection = playerSelectionPrompt.toLocaleLowerCase();
  return playerSelection
}

function playRound(playerSelection, computerSelection){
  console.log(`Player Selection is ${playerSelection}`);
  console.log(`Computer Selection is ${computerSelection}`);
  if (playerSelection === computerSelection){
    banner.textContent = `The computer chose ${computerSelection}... it's a tie!`;
    console.log(`The computer chose ${computerSelection}` + " it's a tie!");
    console.log(`The Score is You:${playerScore} and Computer: ${computerScore}`);
  }
  else if (playerSelection == 'scissors' && computerSelection == "paper"
  || playerSelection == 'paper' && computerSelection == 'rock'
  || playerSelection == 'rock' && computerSelection == 'scissors'){
    banner.textContent = `The computer chose ${computerSelection}... you win!`;
    console.log(`The computer chose ${computerSelection}` + " you win!");
    playerScore++;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    console.log(`The Score is You:${playerScore} and Computer: ${computerScore}`)
  }
  else if (computerSelection == 'scissors' && playerSelection == "paper"
  || computerSelection == 'paper' && playerSelection == 'rock'
  || computerSelection == 'rock' && playerSelection == 'scissors'){
    banner.textContent = `The computer chose ${computerSelection}... you lost!`;
    console.log(`The computer chose ${computerSelection}` + " you lost!");
    computerScore++;
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    console.log(`The Score is You:${playerScore} and Computer: ${computerScore}`);
}
}

buttons.forEach((button)=>{button.addEventListener('click',()=>{

  playerSelection = button.id;
  computerSelection = computerPlay();
  game();
  })

})

const player = document.querySelector("#playerScore");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computerScore");
computer.textContent = `Computer Score: ${computerScore}`;


function game(){
  playRound(playerSelection, computerSelection);
  if (playerScore == 5){
    playerScore = 0;
    computerScore = 0;
    banner.textContent = "You won the game! congrats!"
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
  }
  else if (computerScore == 5){
    playerScore = 0;
    computerScore = 0;
    banner.textContent = "You lost the game! lame :("
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
  }
}