function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}!`);
  };
}

const greetName = greet("Hasib");
greetName("Hello");
// Note : Here The greetName() return the function(message) hence i put "Hello as an argument."

// Example 2: Function Factory
// A function can generate different versions of another function dynamically.

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Example 4: Delayed Execution Using Closure

function delayMessage(message, delay) {
  return function (name) {
    setTimeout(() => {
      console.log(`${message} ${name}`);
    }, delay);
  };
}
const delayedHello = delayMessage("Hello", 2000);
delayedHello("Hasib"); // Message will appear after 2 seconds

// Example 3: Conditional Function Generator
function compare(operator) {
  return function (a, b) {
    if (operator === "greaters") return a > b;
    if (operator === "less") return a < b;
    return "Invalid operator";
  };
}

const greaterThan = compare("greaters");
console.log(greaterThan(12, 5)); // Output: true

const lessThan = compare("less");
console.log(lessThan(10, 5)); // Output: false
