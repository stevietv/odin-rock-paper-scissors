var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let random = Math.random() * 100;  

    if (random > 66)
        return "rock";
    else if (random > 33)
        return "paper"
    else
        return "scissors"
}


function updateScore() {
    const humanScoreSpan = document.querySelector('span#humanScore');
    const computerScoreSpan = document.querySelector('span#computerScore');

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

function addRoundToLog(move) {
    const rounds = document.querySelector('#rounds');
    const round = document.createElement('li');
    round.textContent = move;
    rounds.appendChild(round);
}

function checkWinner() {
    if (humanScore < 5 && computerScore < 5) {
        return;
    }

    if (humanScore > computerScore)
        addRoundToLog(`Congratulations You Win! You scored ${humanScore} and the computer scored ${computerScore}.`);
    else if (humanScore < computerScore)
        addRoundToLog(`Sorry, you lose! You scored ${humanScore} and the computer scored ${computerScore}.`);
    else
        addRoundToLog(`Its a draw! You both scored ${humanScore}.`);

    buttons.forEach(button => {
        button.disabled = true;
    });
}

function playRound(humanChoice) {
    humanChoice = humanChoice.toLowerCase();
    var computerChoice = getComputerChoice();

    if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            addRoundToLog("You Win! Paper beats Rock");
            humanScore++;
        }
        else if (humanChoice == "scissors") {
            addRoundToLog("You Lose! Rock beats Scissors");
            computerScore++;
        }
        else {
            addRoundToLog("You both drew Rock");
        }
    }

    else if (computerChoice == "paper") {
        if (humanChoice == "scissors") {
            addRoundToLog("You Win! Scissors beats Paper");
            humanScore++;
        }
        else if (humanChoice == "rock") {
            addRoundToLog("You Lose! Rock beats Paper");
            computerScore++;
        }
        else {
            addRoundToLog("You both drew Paper");
        }
    }

    else if (computerChoice == "scissors") {
        if (humanChoice == "rock") {
            addRoundToLog("You Win! Rock beats Scissors");
            humanScore++;
        }
        else if (humanChoice == "paper") {
            addRoundToLog("You Lose! Scissors beats Paper");
            computerScore++;
        }
        else {
            addRoundToLog("You both drew scissors");
        }
    }
}

const buttons = document.querySelectorAll('#buttons>button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
        updateScore();
        checkWinner();
    })
});

const resetButton = document.querySelector('button#reset');

resetButton.addEventListener('click', () => {
    location.reload();
})
