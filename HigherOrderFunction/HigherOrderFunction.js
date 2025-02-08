// 1. Functions That Take Another Function as an Argument

function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}

console.log(operate(2, 4, add));
console.log(operate(2, 4, multiply));

// 2. Functions That Return Another Function
function greeting(message) {
  return function (name) {
    return `${message}, ${name}!`;
  };
}

const sayHello = greeting("Hello");
console.log(sayHello("Alice")); // Output: Hello, Alice!

const sayWelcome = greeting("Welcome");
console.log(sayWelcome("Bob")); // Output: Welcome, Bob!

// Common Built-in Higher-Order Functions

// 3. map() – Transforms an Array
const numbers = [1, 2, 3, 4];

const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16]

// 4. filter() – Filters Elements Based on a Condition

const number = [10, 25, 30, 45];

const greaterThan20 = number.filter((num) => num > 20);
console.log(greaterThan20); // Output: [25, 30, 45]

// 5. reduce() – Accumulates Values
const numberss = [1, 2, 3, 4];

const sum = numberss.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10

// 6. forEach() – Iterates Over Elements

// 7. sort() – Custom Sorting
