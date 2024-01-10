const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];
const POINTS_TO_WIN = 3;

function promptLocal(message) {
  console.log(`=> ${message}`);
}

function explainRules() {
  console.clear();
  promptLocal("Welcome to rock, paper, scissors, spock, lizard.");
  promptLocal("This is a variation of rock, paper, scissors, adding two choices.");
  promptLocal("The rules for the game are Scissors cuts Paper covers Rock crushes");
  promptLocal("Lizard poisons Spock smashes Scissors decapitates Lizard eats");
  promptLocal("Paper disproves Spock vaporizes Rock crushes Scissors.");
  promptLocal("Man versus machine. First to 3 points wins. Good luck!");
}

let validChoicesShorthand = [];
function createShorthand(arr) {
  for (let count = 0; count < arr.length; count += 1) {
    if (validChoicesShorthand.includes(arr[count][0])) {
      validChoicesShorthand.push(arr[count].slice(0,2));
    } else {
      validChoicesShorthand.push(arr[count][0]);
    }
  }
}

let combinedChoicesAndShorthand = [];
function combineChoicesAndShorthand (arr1, arr2) {
  for (let count = 0; count < arr1.length; count += 1) {
    combinedChoicesAndShorthand.push(`${arr1[count]} = ${arr2[count]}`);
  }
}

function convertShorthandToFullChoice(str) {
  switch (str) {
    case "r" : return "rock";
    case "p" : return "paper";
    case "s" : return "scissors";
    case "sp" : return "spock";
    case "l" : return "lizard";
    default : return "N/A";
  }
}

createShorthand(VALID_CHOICES);
combineChoicesAndShorthand(VALID_CHOICES, validChoicesShorthand);

function playerWins(choice, computerChoice) {
  return (choice === "rock" && computerChoice === "scissors") ||
         (choice === "paper" && computerChoice === "rock") ||
         (choice === "scissors" && computerChoice === "paper") ||
         (choice === "rock" && computerChoice === "lizard") ||
         (choice === "lizard" && computerChoice === "spock") ||
         (choice === "spock" && computerChoice === "scissors") ||
         (choice === "scissors" && computerChoice === "lizard") ||
         (choice === "lizard" && computerChoice === "paper") ||
         (choice === "paper" && computerChoice === "spock") ||
         (choice === "spock" && computerChoice === "rock");
}

function displayWinner(choice, computerChoice) {
  promptLocal(`You chose ${choice}, computer chose ${computerChoice}.`);
  if (playerWins(choice, computerChoice)) {
    promptLocal("You win!");
    return ("You win!");
  } else if (choice === computerChoice) {
    promptLocal("It's a tie!");
    return ("It's a tie!");
  } else {
    promptLocal("Computer wins!");
    return ("Computer wins!");
  }
}

let result;
let playerScore = 0;
let computerScore = 0;
let highScore = 0;

function playOneRound() {
  promptLocal(`Choose one: ${combinedChoicesAndShorthand.join(", ")}.`);
  let choice = readline.question();

  while (!validChoicesShorthand.includes(choice.toLowerCase()) &&
         !VALID_CHOICES.includes(choice.toLowerCase())) {
    promptLocal("That's not a valid choice.");
    choice = readline.question();
  }

  console.clear();
  if (choice.length < 3) {
    choice = convertShorthandToFullChoice(choice.toLowerCase());
  } else {
    choice = choice.toLowerCase();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  result = displayWinner(choice, computerChoice);
}

function addToScore() {
  if (result === "You win!") {
    playerScore += 1;
  } else if (result === "Computer wins!") {
    computerScore += 1;
  } else {
    playerScore += 0;
  }
}

function refreshHighScore() {
  highScore = Math.max(playerScore, computerScore);
}

function printScore() {
  if (highScore === POINTS_TO_WIN) {
    promptLocal(`We have a winner! Final score is you: ${playerScore}, computer: ${computerScore}.`);
  } else {
    promptLocal(`Current score is you: ${playerScore}, computer: ${computerScore}.`);
  }
}

while (true) {
  explainRules();
  while (true) {
    playOneRound();
    addToScore();
    refreshHighScore();
    printScore();

    if (highScore >= 3) {
      highScore = 0;
      playerScore = 0;
      computerScore = 0;
      break;
    }
  }

  promptLocal("Play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "y" && answer[0] !== "n") {
    promptLocal("Please answer 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}