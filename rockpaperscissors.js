// Write a function to give a random number between 0 and 2 or 1 and 3.
// Make the function return "rock" for 0, "paper" for 1, and "scissors" for 2.
function getComputerChoice(){
    // Generate a random integer: 0, 1, or 2
    const randomNum = Math.floor(Math.random() * 3);
// Return rock, paper, or scissors based on the random number given.
    switch (randomNum){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}
// Write a function that gives the human choice of rock, paper, or scissor.
// Give a prompt that requires the user to enter a choice and returns the user choice.
function getHumanChoice(){
    let choice = prompt("What is your choice?");
    return choice;
}
console.log(getComputerChoice());
console.log(getHumanChoice());