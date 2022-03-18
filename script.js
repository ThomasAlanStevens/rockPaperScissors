document.querySelector('.play').addEventListener('click', game)

//Make the computer randomly choose rock, paper, or scissors.
function computerPlay(){
    const rps = ['rock', 'paper', 'scissors']
    let random = Math.floor(Math.random() * 3)
    let choice = rps[random]
    return choice
}
// compare user and computer choices, declare winner.
function playRound(){
    let playerChoice = prompt('Rock, Paper, Scissors?').toLowerCase()
    let computerChoice = computerPlay()
    if(playerChoice == computerChoice){
        return 'TIE'
    }
    else if(playerChoice == 'rock' && computerChoice == 'paper'){
        return 'LOSE'
    }
    else if(playerChoice == 'paper' && computerChoice == 'scissors'){
        return 'LOSE'
    }
    else if(playerChoice == 'scissors' && computerChoice == 'rock'){
        return 'LOSE'
    }
    else{
        return 'WINNER'
    }
}

//calls playRound for 5 rounds and prints results.
function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound())
    }
}