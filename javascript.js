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

resultDiv = document.querySelector("#results");
resultPara = document.createElement("p");
scorePara = document.createElement("p");
winnerPara = document.createElement("p");

let playerScore = 0
let computerScore = 0

function playGame(playerSelection) {

    let computerSelection = getComputerChoice()
            
    let result = playRound(playerSelection, computerSelection)
    if (result === "win") {
        playerScore = playerScore + 2
        resultPara.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (result === "tie") {
        playerScore = playerScore + 1
        computerScore = computerScore + 1
        resultPara.textContent = `It was a Tie! Both choose ${playerSelection}`;
    } else if (result === "loose") {
        computerScore = computerScore + 2
        resultPara.textContent = `You Loose! ${computerSelection} beats ${playerSelection}`;
    }

    resultDiv.appendChild(resultPara);
    displayScore(playerScore, computerScore)

    if (playerScore >= 5 || computerScore >= 5) {
        displayFinalResult(playerScore, computerScore)
    }
}

function displayScore(playerScore, computerScore) {
    scorePara.textContent = `Your current score is ${playerScore} and computer's score is ${computerScore}`;
    resultDiv.appendChild(scorePara);
}

function displayFinalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        winnerPara.textContent = "You have Won this game!, Refresh to play again.";
        resultDiv.appendChild(winnerPara);
    } else if (playerScore < computerScore) {
        winnerPara.textContent = "You Lost this game!, Refresh to play again.";
        resultDiv.appendChild(winnerPara);
    } else {
        winnerPara.textContent = "This game was a Tie!, Refresh to play again.";
        resultDiv.appendChild(winnerPara);
    }
}