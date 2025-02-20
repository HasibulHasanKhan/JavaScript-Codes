// Named exports
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Default export
function multiply(a, b) {
  return a * b;
}

// Exporting
module.exports = { add, subtract, multiply };

//-----------------
// Importing
const math = require("./math.js");

console.log(math.add(5, 3)); // Output: 8
console.log(math.subtract(5, 3)); // Output: 2
console.log(math.multiply(5, 3)); // Output: 15

/// ESM :
// Named exports
const add2 = (a, b) => a + b;
const subtract2 = (a, b) => a - b;

// Default export
function multiply2(a, b) {
  return a * b;
}

// Exporting
export default { add2, subtract2, multiply2 };

//-----------------
// Importing
import {
  add as _add,
  subtract as _subtract,
  multiply as _multiply,
} from "./math.js";

console.log(_add2(5, 3)); // Output: 8
console.log(_subtract2(5, 3)); // Output: 2
console.log(_multiply2(5, 3)); // Output: 15
