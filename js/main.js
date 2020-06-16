
let icons = document.querySelectorAll("img");
let playerScoreCard = document.getElementById("playerScore");
let computerScoreCard = document.getElementById("computerScore");
let choice = document.getElementById("choice");
let playerScore = 0;
let computerScore = 0;


icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        let playerChoice = icon.id;
        let computerChoice = getComputerChoice();
        gameResult(playerChoice, computerChoice);
        playerScoreCard.innerHTML = playerScore;
        computerScoreCard.innerHTML = computerScore;
    })
})

let getComputerChoice = () => {
    let icons = ["rock", "paper", "scissor"];
    let randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
}

let gameResult = (playerChoice, computerChoice) => {
    let bothValue = [playerChoice, computerChoice];

    if (bothValue.includes("rock") && bothValue.includes("scissor")) {
        // rock wins
        let winnerIndex = bothValue.findIndex(item => item == "rock");

        if (winnerIndex == 0) {
            playerScore++;
        } else {
            computerScore++;
        }

        choice.innerHTML = "Computer Choice: " + computerChoice;

    } else if (bothValue.includes("scissor") && bothValue.includes("paper")) {
        // scissors wins
        let winnerIndex = bothValue.findIndex(item => item == "scissor");

        if (winnerIndex == 0) {
            playerScore++;
        } else {
            computerScore++;
        }

        choice.innerHTML = "Computer Choice: " + computerChoice;

    } else if (bothValue.includes("rock") && bothValue.includes("paper")) {
        // paper wins
        let winnerIndex = bothValue.findIndex(item => item == "paper");

        if (winnerIndex == 0) {
            playerScore++;
        } else {
            computerScore++;
        }

	    choice.innerHTML = "Computer Choice: " + computerChoice;

    } else {
        choice.innerHTML = "It's Draw!";
    }

}
