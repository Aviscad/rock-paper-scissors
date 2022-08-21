const options = ["Rock", "Paper", "Scissors"];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  let times = prompt("How many times do you want to play?");
  let result = "";

  for (let i = 1; i <= times; i++) {
    let computer = getRandomOption();
    let playerSelection = prompt(
      "Enter your selection (rock, paper, scissors)"
    );
    console.log(`P: ${playerSelection} | C: ${computer}`);
    if (playerSelection.toLowerCase() == "rock" && computer == "scissors") {
      result = "Player 1 Wins: Rock beats Scissors";
      playerWins++;
    } else if (playerSelection.toLowerCase() == "rock" && computer == "paper") {
      result = "Computer Wins: Paper beats Rocks";
      computerWins++;
    } else if (
      playerSelection.toLowerCase() == "paper" &&
      computer == "scissors"
    ) {
      result = "Computer Wins: Scissors betas Paper";
      computerWins++;
    } else if (playerSelection.toLowerCase() == "paper" && computer == "rock") {
      result = "Player 1 Wins: Paper beats Rocks";
      playerWins++;
    } else if (
      playerSelection.toLowerCase() == "scissors" &&
      computer == "paper"
    ) {
      result = "Player 1 Wins: Scissors betas Paper";
      playerWins++;
    } else if (
      playerSelection.toLowerCase() == "scissors" &&
      computer == "rock"
    ) {
      result = "Computer 1 Wins: Rock beats Scissors";
      computerWins++;
    } else if (playerSelection.toLocaleLowerCase() == computer) {
      result = "Its a Tie";
    }

    console.log(result);
  }

  if (playerWins > computerWins) {
    console.log("Player Wins " + playerWins + ":" + computerWins);
  } else if (computerWins > playerWins) {
    console.log("Computer Wins " + computerWins + ":" + playerWins);
  } else {
    console.log(
      "Its a Tie Player" + playerWins + ":" + computerWins + "Computer"
    );
  }
}

function getRandomOption() {
  return options[getRandomIntInclusive(0, options.length - 1)].toLowerCase();
}

playGame();
