// Write a function to give a random number between 0 and 2 or 1 and 3.
// Return "rock" for 0, "paper" for 1, and "scissors" for 2.
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


// Write function for playing the game round by round (moved into playGame function ln 28)



 // Write a function to play the game for 5 rounds and declare a winner at the end.
    // Write variables to keep track of players' scores.
    // Create two variables: humanScore and computerScore
    // Add a variable for the current round
    let humanScore = 0;
    let computerScore = 0;

    const container = document.createElement("div");
    const resultsDiv = document.createElement("div");
    const roundMessage = document.createElement("p");
    const scoreDisplay = document.createElement("p");
    const winnerMessage = document.createElement("h2");

    roundMessage.textContent = "Click a button to start the game!";
    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    resultsDiv.append(roundMessage, scoreDisplay, winnerMessage);
    document.body.append(container, resultsDiv);

    function playRound(humanChoice, computerChoice){ // Define the game function with parameters for the functions
    const humanSelection = ; // Execute the previous functions inside the game function to get the choices
    const computerSelection = getComputerChoice();

    console.log(`Human chose: ${humanSelection}`); // Print the actual choices to the console once the human choice has been received.
    console.log(`Computer chose: ${computerSelection}`);
    }
    
    function playGame(currentRound = 1){

    


    const humanSelection = getHumanChoice(); // Execute the previous functions inside the game function to get the choices
    const computerSelection = getComputerChoice();

    console.log(`Round ${currentRound}`); //State the current round
    console.log(`Human chose: ${humanSelection}`); // Print the actual choices to the console once the choices have been received.
    console.log(`Computer chose: ${computerSelection}`);
    // Write conditions to determine winner
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

const choices = ["rock", "paper", "scissors"];

choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.toUpperCase();

    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound(choice, computerSelection);
    });
    container.appendChild(button);
});