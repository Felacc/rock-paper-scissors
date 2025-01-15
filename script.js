let computerScore = 0;
let humanScore = 0;
let computerChoice;
let humanChoice;


// Button event listeners
const r_btn = document.querySelector("#r-btn");
const p_btn = document.querySelector("#p-btn");
const s_btn = document.querySelector("#s-btn");

r_btn.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
    displayResults();
});

p_btn.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
    displayResults();
});

s_btn.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
    displayResults();
});


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

function displayResults() {
    // Display current scores
    const resultsDiv = document.createElement("div");
    const body = document.querySelector("body");
    const buttons = document.querySelector(".buttons");

    resultsDiv.innerHTML = "Your Score: " + humanScore + " Computer Score: " + computerScore;
    
    // if score of 5 is reached remove buttons and display result
    if (humanScore == 5) {
        buttons.removeChild(r_btn);
        buttons.removeChild(p_btn);
        buttons.removeChild(s_btn);

        resultsDiv.innerHTML += "<br>You won the game!";
    }

    if (computerScore == 5) {
        buttons.removeChild(r_btn);
        buttons.removeChild(p_btn);
        buttons.removeChild(s_btn);
        resultsDiv.innerHTML += "<br>You lost the game.";
    }

    body.appendChild(resultsDiv);

}