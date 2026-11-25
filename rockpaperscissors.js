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

    function playRound(humanChoice, computerChoice){ 
    
        if (humanScore >= 5 || computerScore >= 5) return;
    
        if (humanChoice === computerChoice) {
            roundMessage.textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}. It's a tie!`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            roundMessage.textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}. One point awarded, you win!`;
        } else {  // winning conditions for the computer
            computerScore++;
            roundMessage.textContent = `Human chose ${humanChoice}, Computer chose ${computerChoice}. Computer wins one point!`;
        }
        scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`

        if (humanScore === 5){
            winnerMessage.textContent = "Game Over! You won the game!";
        } else if (computerScore === 5) {
            winnerMessage.textContent = "Game Over! Computer wins the game!";
        }
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