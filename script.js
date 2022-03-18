document.querySelector('.rock').addEventListener('click', playRound)
document.querySelector('.paper').addEventListener('click', playRound)
document.querySelector('.scissors').addEventListener('click', playRound)
let choices = document.querySelector('section')
let div = document.querySelector('div')
let computerScore = 0
let playerScore = 0

//Make the computer randomly choose rock, paper, or scissors.
function computerPlay(){
    const rps = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    let choice = rps[random]
    return choice
}
// compare user and computer choices, declare winner.
function playRound(){
    let computerChoice = computerPlay()
    let playerChoice = this.innerText
    choices.innerText = `Player: ${playerChoice} Computer: ${computerChoice}`
    if(playerChoice == computerChoice){
        div.innerText = `Computer Score: ${computerScore}  Player Score ${playerScore}`
    }
    else if(playerChoice == 'rock' && computerChoice == 'paper'){
        computerScore++
        div.innerText = `Computer Score: ${computerScore}  Player Score ${playerScore}`
    }
    else if(playerChoice == 'paper' && computerChoice == 'scissors'){
        computerScore++
        div.innerText = `Computer Score: ${computerScore}  Player Score ${playerScore}`
    }
    else if(playerChoice == 'scissors' && computerChoice == 'rock'){
        computerScore++
        div.innerText = `Computer Score: ${computerScore}  Player Score ${playerScore}`
    }
    else {
        playerScore++
        div.innerText = `Computer Score: ${computerScore}  Player Score ${playerScore}`
    }

    if(computerScore == 5){
        div.innerText = `Results: Computer wins 
        `
        computerScore = 0
        playerScore = 0
    }
    else if(playerScore == 5){
        div.innerText = `Results: Player wins 
        ` 
        computerScore = 0
        playerScore = 0
    }
}

//calls playRound for 5 rounds and prints results.
// function game(){
//     for(let i = 0; i < 5; i++){
//         console.log(playRound())
//     }
// }