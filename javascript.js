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

function playGame(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "rock":
                return "It was a tie! Both choose Rock.";
                break;
            case "paper":
                return "You loose! Paper beats Rock.";
                break;
            case "scissors":
                return "You Win! Rock Beats Paper."
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                return "You Win! Paper Beats Rock.";
                break;
            case "paper":
                return "It was a tie! Both choose Paper.";
                break;
            case "scissors":
                return "You loose! Scissors beats Paper."
        }
    }
    else if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "rock":
                return "You loose! Rock beats Scissors.";
                break;
            case "paper":
                return "You Win! Scissors Beats Paper.";
                break;
            case "scissors":
                return "It was a tie! Both choose Scissors."
        }
    }

}

const playerSelection = "PaPer";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));