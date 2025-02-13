function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      console.log(this);
      return func.apply(this, args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

// Normal function
function sum(a, b, c) {
  return a + b + c;
}

// Curried function
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)); // Output: 6
