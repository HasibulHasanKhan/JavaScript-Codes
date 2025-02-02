// take user input for two numbers
// let number1 = Number(prompt("Enter the value of number1: "));
// let number2 = Number(prompt("Enter the value of number2: "));
let number1 = 12;
let number2 = 10;

// const operator = prompt("Enter a operator ");
const operator = "-";
switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + #{number2} = ${result} `);

    break;

  case "-":
    result = number1 + number2;
    console.log(`${number1} - ${number2} = ${result}`);

  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
}
