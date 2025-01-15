let computerScore = 0;
let humanScore = 0;
let computerChoice;
let humanChoice;


// 
const r_btn = document.querySelector("#r-btn");
const p_btn = document.querySelector("#p-btn");
const s_btn = document.querySelector("#s-btn");

r_btn.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

p_btn.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

s_btn.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});
// Start game of RPS
playGame();

// Functions
function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // get a random number between 1 and 3 inclusive, code from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

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

// function getHumanChoice() {
//     // get initial value from user
//     let humanChoice = prompt("Your move.", "");
//     while (true) {
//         // format string
//         humanChoice = humanChoice.trim();
//         humanChoice = humanChoice.toLowerCase();

//         // check if inputted value is a not valid move, prompt fo`r a new input, then loop
//         // if input is valid return value
//         if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
//             humanChoice = prompt("Invalid move.", "");
//         } else {
//             return humanChoice;
//         }
//     }
// }

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

function playGame() {
    // Display current scores
    console.log("Initial Scores\n" + "Player Score: " + humanScore + "\nComputer Score: " + computerScore);

    // // Play 5 rounds
    // // Output results
    // for (let i = 0; i < 5; i++) {
    //     // Get rock-paper-scissors choices from human and computer
    //     computerChoice = getComputerChoice();
    //     humanChoice = getHumanChoice();
    //     // Play the round
    //     playRound(computerChoice, humanChoice);
    // }

    console.log("Final Scores\n" + "Player Score: " + humanScore + "\nComputer Score: " + computerScore);

    if (humanScore == computerScore) {
        console.log("The game is a tie!")
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    }

    if (humanScore < computerScore) {
        console.log("You lost the game.")
    }

}