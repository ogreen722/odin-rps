// Write a function to give a random number between 0 and 2 or 1 and 3.
// Make the function return "rock" for 0, "paper" for 1, and "scissors" for 2.
function getComputerChoice(){
    // Generate a random integer: 0, 1, or 2
    const randomNum = Math.floor(Math.random() * 3);
// Return rock, paper, or scissors based on the random number given.
    switch (randomNum){
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}
// Write a function that gives the human choice of rock, paper, or scissor.
// Give a prompt that requires the user to enter a choice and returns the user choice.
function getHumanChoice(){
    let choice = prompt("What is your choice?");
    return choice.toLowerCase(); // Make the user choice case insensitive.
}
// Write variables to keep track of players' scores.
// Create two variables: humanScore and computerScore
let humanScore = 0;
let computerScore = 0;
// Write function for playing the game round by round.
function playRound(humanChoice, computerChoice){ // Define the game function with parameters for the functions


    console.log(`Human chose: ${humanSelection}`); // Print the actual choices to the console once the human choice has been received.
    console.log(`Computer chose: ${computerSelection}`);
    // Write the if/else code for the console to print a victory or defeat message and change score
    if (humanSelection === computerSelection){ // Tie condition
        console.log("It's a tie");
        
    } // Winning conditions for the player
    else if (
        (humanSelection === "rock" && computerSelection === "scissors") || 
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "rock")
    ){
            humanScore++;
        console.log("One point awarded, you win!");
    } else { // winning conditions for the computer
            computerScore++;
            console.log("Computer wins one point!");
    }
}
    const humanSelection = getHumanChoice(); // Execute the previous functions inside the game function to get the choices
    const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);