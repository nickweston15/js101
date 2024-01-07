const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "es";

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function otherPrompt(message) {
  console.log(`=> ${message}`);
}

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function invalidName(name) {
  return name.trimStart() === "";
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt("welcome");
let name = readline.question();

while (invalidName(name)) {
  prompt("validName");
  name = readline.question();
}

otherPrompt(`Hello, ${name}!`);

while (true) {
  prompt("firstNum");
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt("validNum");
    num1 = readline.question();
  }

  prompt("secondNum");
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt("validNum");
    num2 = readline.question();
  }

  prompt("chooseOperation");
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("validOperation");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(num1) + Number(num2);
      break;
    case "2":
      output = Number(num1) - Number(num2);
      break;
    case "3":
      output = Number(num1) * Number(num2);
      break;
    case "4":
      output = Number(num1) / Number(num2);
      break;
  }

  otherPrompt(`The result is: ${output}.`);

  prompt("newOperation");
  let answer = readline.question();

  if (answer[0].toLowerCase() !== "y") break;
}