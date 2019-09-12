function computerPlay() {
    const opcoes = ["ROCK", "PAPER", "SCISSORS"];
    let item = opcoes[Math.floor(Math.random() * opcoes.length)]
    return item
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("Tied game!")
    } else if (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) {
        console.log("You win! Rock beats Scissors")
        return 1
    } else if (playerSelection.toUpperCase() === "Rock".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) {
        console.log("You lose! Paper beats Rock")
        return 2
    } else if (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Paper".toUpperCase()) {
        console.log("You win! Scissors beats Paper")
        return 1
    } else if (playerSelection.toUpperCase() === "Scissors".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) {
        console.log("You Lose! Rock beats Scissors")
        return 2
    } else if (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Rock".toUpperCase()) {
        console.log("You win! Paper beats Rock")
        return 1
    } else if (playerSelection.toUpperCase() === "Paper".toUpperCase() && computerSelection.toUpperCase() === "Scissors".toUpperCase()) {
        console.log("You lose! Scissors beats Paper")
        return 2
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    let tiedScore = 0
    for (var i = 0; i < 5; i++) {
        let playerSelection = prompt();
        let computerSelection = computerPlay();
        if (playRound(playerSelection, computerSelection) == 1) {
            playerScore += 1;
        } else if (playRound(playerSelection, computerSelection) == 2) {
            computerScore += 1;
        } else {
            tiedScore += 1
        }
        console.log("Player Score: " + playerScore + " - Computer Score: " + computerScore + " - Tied: " + tiedScore)
    }
}