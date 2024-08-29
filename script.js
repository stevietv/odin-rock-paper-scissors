function getComputerChoice() {
    let random = Math.random() * 100;  

    if (random > 66)
        return "rock";
    else if (random > 33)
        return "paper"
    else
        return "scissors"
}

