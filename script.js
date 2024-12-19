console.log("Testing");


// Pseudocode
// Create variable for human score
// Create variable for computer score
// Create a variable for human choice
// Create a variable for computer choice
// Write function for getting computer choice
//     generate random number 1-3 (inclusive)
//     IF number is 1, return "rock"
//     ELIF number is 2, return "paper"
//     ELSE number is 3, return "scissors"
// Write a function for getting human input
//     prompt user for input, and store the answer in a variable
//     check that user input is either "rock", "paper", or "scissors"
//         standardize input by making it lowercase and trimming whitespace
//         compare strings against desired inputs
//         IF the input is valid (rock, paper, or scissors), return it
//         ELSE ask the user to try again
// Declare the player and computer scores
// Write a function for playing a round that uses human choice and computer choice as parameters
//     IF computer chose paper and human chose rock, display message that human wins the round, and increment human's score by 1
//     etc...
// FOR 5 rounds, record scores, and declare a winner at the end

let computerScore = 0;
let humanScore = 0;
console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
let computerChoice = getComputerChoice();
console.log(computerChoice);

let humanChoice = getHumanChoice();
console.log(humanChoice);

playRound(computerChoice, humanChoice);
console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);



function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // get a random number between 1 and 3 inclusive, code from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    console.log(randomNumber);

    if (randomNumber === 1) {
        return "rock";
    }

    if (randomNumber === 2) {
        return "paper";
    }

    if (randomNumber === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    // get initial value from user
    let humanChoice = prompt("Your move.", "");
    while (true) {
        // format string
        humanChoice = humanChoice.trim();
        humanChoice = humanChoice.toLowerCase();
        
        // check if inputted value is a not valid move, prompt fo`r a new input, then loop
        // if input is valid return value
        if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
            humanChoice = prompt("Invalid move.", "");
        } else {
            return humanChoice;
        }
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!")
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.")
            computerScore += 1;
        }

        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.")
            humanScore += 1;
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.")
            computerScore += 1;
        }

        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.")
            humanScore += 1;
        }
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.")
            computerScore += 1;
        }

        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.")
            humanScore += 1;
        }
    }
}