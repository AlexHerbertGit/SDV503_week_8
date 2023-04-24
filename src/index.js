function toString(str) {
    return str.toString()
}
console.log(typeof(toString(true)))

function compareTwoStrings(strOne, strTwo) {
    return strOne.length === strTwo.length
}

console.log(compareTwoStrings("AB", "CD"))

function playGame(playerSelection) {
    const options = ["rock", "paper", "scissors"];
    const computerSelection = options[Math.floor(Math.random() * options.length)];

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + playerSelection + " beats" + computerSelection;
    } else {
        return "You Loose!" + computerSelection + " beats" + playerSelection;
    }
}

console.log(playGame("scissors"))
console.log(playGame("paper"))