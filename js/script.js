let rock = document.querySelector("#rock"),
  paper = document.querySelector("#paper"),
  scissors = document.querySelector("#scissors"),
  selections = document.querySelector("#selection"),
  score = document.querySelector("#score"),
  selectImage = "",
  playerWins = 0,
  computerWins = 0,
  resultado = document.querySelector("#resultado"),
  times = 5;

rock.addEventListener("click", () => {
  playerVsComputer("rock");
});

paper.addEventListener("click", () => {
  playerVsComputer("paper");
});

scissors.addEventListener("click", () => {
  playerVsComputer("scissors");
});

function playerVsComputer(playerSelection) {
  let computerSelection = getRandomOption();
  selectImage = computerSelection;
  let result = "";
  if (playerSelection == "rock" && computerSelection == "scissors") {
    result = "Rock beats Scissors, you win!";
    playerWins++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result = "Paper beats Rocks, you lose!";
    computerWins++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result = "Scissors beats Paper, you lose!";
    computerWins++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result = "Paper beats Rocks, you win!";
    playerWins++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result = "Scissors beats Paper, you win!";
    playerWins++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result = "Rock beats Scissors, you lose!";
    computerWins++;
  } else if (playerSelection == computerSelection) {
    result = "It's a Tie";
  }
  resultado.textContent = `${result}`;
  selections.innerHTML = "";
  score.innerHTML = "";
  let img = document.createElement("img"),
    imgPlayer = document.createElement("img");

  imgPlayer.src = "./assets/img/" + playerSelection + ".png";
  img.src = "./assets/img/" + selectImage + ".png";

  if (playerWins == 5 || computerWins == 5) {
    score.innerHTML = `
    <p>The Game is Over!</p>
    <p>Final Score</p>
    <p>Player - ${playerWins}:${computerWins} - Computer</p>
    `;
    playerWins = computerWins = 0;
  } else if (playerWins < 5 || computerWins < 5) {
    score.textContent = `Player - ${playerWins}:${computerWins} - Computer`;
  }

  selections.appendChild(imgPlayer);
  selections.appendChild(img);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomOption() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[getRandomIntInclusive(0, options.length - 1)].toLowerCase();
}
