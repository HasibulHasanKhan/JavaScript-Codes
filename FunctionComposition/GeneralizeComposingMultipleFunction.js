const composeMultiple =
  (...functions) =>
  (value) =>
    functions.reduceRight((acc, func) => func(acc), value);

const add5 = (num) => num + 5;
const multiply2 = (num) => num * 2;
const subtract3 = (num) => num - 3;

const finalFunction = composeMultiple(multiply2, add5, subtract3);

console.log(finalFunction(10)); // Output: 24

// functions.reduceRight((acc, func) => func(acc), value);

// here func(acc), value = substrcts(acc = 10 as initital value) then | add(acc = 7) | next...
