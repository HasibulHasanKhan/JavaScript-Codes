const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const addPrefix = (str) => `Mr. ${str}`;
const exclaim = (str) => `${str}!`;

// Function to compose multiple functions
const compose =
  (...functions) =>
  (input) =>
    functions.reduceRight((acc, fn) => fn(acc), input);

const formatName = compose(exclaim, addPrefix, capitalize);

console.log(formatName("john")); // Output: Mr. John!

// using function chaining instead of compose
