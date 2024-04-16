function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1
    if (n === 1) {
        return "Rock"
    } else if (n === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}
