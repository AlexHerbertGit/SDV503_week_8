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
//Computer uses the length of the options array and picks a value at random to select an option. This is then passed down to the next part of the function.
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Loose!" + computerSelection + " beats " + playerSelection;
    }
}
//These if and else statements determine the win, tie or loss conditions based on what the player selection is vs the computers random selection.
console.log(playGame("scissors"))
console.log(playGame("paper"))