// setTimeout() – Executes a function once after a specified delay.
// setInterval() – Executes a function repeatedly at a specified interval.

// Syntax :
// setTimeout(callback, delay, param1, param2, ...);

// example 1 : naming function :
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, "Alice");

// clearTimeout :
let timeoutId = setTimeout(() => {
  console.log("This will not run!");
}, 5000);

clearTimeout(timeoutId); // Cancels the timeout before execution
