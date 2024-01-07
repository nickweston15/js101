const rl = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNum(number) {
  return number.trim() === "" ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function toMonthlyInterestRate(annualPercentageRate) {
  return annualPercentageRate / 12;
}

function toMonthlyLoanDuration(loanDurationYears) {
  return Number(loanDurationYears) * 12;
}

function calcMonthlyPayment(
  loanAmount,
  monthlyInterestRate,
  loanDurationMonths
) {
  if (monthlyInterestRate === 0) {
    return loanAmount / loanDurationMonths;
  } else {
    return Number(loanAmount) *
    (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-(loanDurationMonths)))));
  }
}

prompt("Welcome to Mortgage Calculator!");

while (true) {

  prompt("Enter loan amount: ");
  let loanAmount = rl.question();

  while (invalidNum(loanAmount)) {
    prompt("Please enter a valid number: ");
    loanAmount = rl.question();
  }

  prompt("Enter annual percentage rate (APR) as an integer: ");
  prompt("(Example: 5 for 5% or 7.5 for 7.5%)");
  let annualPercentageRate = rl.question();

  while (invalidNum(annualPercentageRate)) {
    prompt("Please enter a valid number: ");
    annualPercentageRate = rl.question();
  }

  annualPercentageRate = Number(annualPercentageRate) / 100;

  let monthlyInterestRate = toMonthlyInterestRate(annualPercentageRate);

  prompt("Enter loan duration in years: ");
  let loanDurationYears = rl.question();

  while (invalidNum(loanDurationYears)) {
    prompt("Please enter a valid number: ");
    loanDurationYears = rl.question();
  }

  let loanDurationMonths = toMonthlyLoanDuration(loanDurationYears);

  let monthlyPayment = calcMonthlyPayment(
    loanAmount,
    monthlyInterestRate,
    loanDurationMonths
  ).toFixed(2);

  prompt(`Your monthly payment is $${monthlyPayment}.`);

  prompt("Another calculation?");
  let answer = rl.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = rl.question().toLowerCase();
  }

  if (answer[0] === "n") break;
}