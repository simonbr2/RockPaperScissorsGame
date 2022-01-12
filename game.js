let userScore = 0;
let computerScore = 0;
const button = document.querySelectorAll('.button')
const playerSelection = playerSelectionPrompt;
const computerSelection = computerPlay();

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
  console.log(`Player Selection is ${playerSelection}`)
  console.log(`Computer Selection is ${computerSelection}`)
  if (playerSelection === computerSelection){
    console.log(`The computer chose ${computerSelection}` + " it's a tie!")
    console.log(`The Score is You:${userScore} and Computer: ${computerScore}`)
  }
  else if (playerSelection == 'scissors' && computerSelection == "paper"
  || playerSelection == 'paper' && computerSelection == 'rock'
  || playerSelection == 'rock' && computerSelection == 'scissors'){
    console.log(`The computer chose ${computerSelection}` + " you win!")
    userScore++
    console.log(`The Score is You:${userScore} and Computer: ${computerScore}`)
  }
  else if (computerSelection == 'scissors' && playerSelection == "paper"
  || computerSelection == 'paper' && playerSelection == 'rock'
  || computerSelection == 'rock' && playerSelection == 'scissors'){
    console.log(`The computer chose ${computerSelection}` + " you lost!")
    computerScore++
    console.log(`The Score is You:${userScore} and Computer: ${computerScore}`)
}
}

function game(){
  playRound(playerSelectionPrompt(), computerPlay())
  playRound(playerSelectionPrompt(), computerPlay())
  playRound(playerSelectionPrompt(), computerPlay())
  playRound(playerSelectionPrompt(), computerPlay())
  playRound(playerSelectionPrompt(), computerPlay())
}
