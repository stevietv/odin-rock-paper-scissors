function getComputerChoice() {
    let random = Math.random() * 100;  

    if (random > 66)
        return "rock";
    else if (random > 33)
        return "paper"
    else
        return "scissors"
}

function getHumanChoice() {

    let choice = "";
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Enter your choice - rock, paper or scissors").toLowerCase();
    }
    return choice;
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                console.log("You Win! Paper beats Rock");
                humanScore++;
            }
            else if (humanChoice == "scissors") {
                console.log("You Lose! Rock beats Scissors");
                computerScore++;
            }
            else {
                console.log("You both drew Rock");
            }
        }
    
        else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                console.log("You Win! Scissors beats Paper");
                humanScore++;
            }
            else if (humanChoice == "rock") {
                console.log("You Lose! Rock beats Paper");
                computerScore++;
            }
            else {
                console.log("You both drew Paper");
            }
        }
    
        else if (computerChoice == "scissors") {
            if (humanChoice == "rock") {
                console.log("You Win! Rock beats Scissors");
                humanScore++;
            }
            else if (humanChoice == "paper") {
                console.log("You Lose! Scissors beats Paper");
                computerScore++;
            }
            else {
                console.log("You both drew scissors");
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        var humanSelection = getHumanChoice();      
        var computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);

        console.log(`The score is ${humanScore} vs ${computerScore}`)
    }

    if (humanScore > computerScore)
        console.log(`Congratulations You Win! You scored ${humanScore} and the computer scored ${computerScore}.`);
    else if (humanScore < computerScore)
        console.log(`Sorry, you lose! You scored ${humanScore} and the computer scored ${computerScore}.`);
    else
        console.log(`Its a draw! You both scored ${humanScore}.`);

}

playGame();
