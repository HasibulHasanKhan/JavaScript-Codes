const calculator = (a) => (b) => (operator) => {
  switch (operator) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return b != 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid Operator";
  }
};

const calc = calculator(10)(5);

console.log(calc("add"));
console.log(calc("substract"));
console.log(calc("multiply"));
console.log(calc("divide"));
