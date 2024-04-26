function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1
    if (n === 1) {
        return "rock"
    } else if (n === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "tie";
                break;
            case "paper":
                return "loose";
                break;
            case "scissors":
                return "win"
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "win";
                break;
            case "paper":
                return "tie";
                break;
            case "scissors":
                return "loose"
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "loose";
                break;
            case "paper":
                return "win";
                break;
            case "scissors":
                return "tie"
        }
    }

}

let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playGame("rock")
})

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playGame("paper")
})

let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    playGame("scissors")
})

function playGame(playerSelection) {
    let playerScore = 0
    let computerScore = 0

    let computerSelection = getComputerChoice()
        

    let result = playRound(playerSelection, computerSelection)
    if (result === "win") {
        playerScore = playerScore + 2
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (result === "tie") {
        playerScore = playerScore + 1
        computerScore = computerScore + 1
        console.log(`It was a Tie! Both choose ${playerSelection}`)
    } else if (result === "loose") {
        computerScore = computerScore + 2
        console.log(`You Loose! ${computerSelection} beats ${playerSelection}`)
    }
        
    //Displays final score
    console.log(`Your score was ${playerScore} and computer's score was ${computerScore}`)
    if (playerScore > computerScore) {
        console.log("You Win this round!")
    } else if (playerScore < computerScore) {
        console.log("You Loose this round!")
    } else {
        console.log("This round was a Tie!")
    }
}