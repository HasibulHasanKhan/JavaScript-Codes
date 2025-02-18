// Callbacks in Asynchronous Functions

// Promises with Higher-Order Functions
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 2000);
  });
}

fetchData().then(console.log); // Output after 2s: "Data loaded!"

// Currying for Configurable Functions :

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));

// with bind :
function curryBind(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) {
      return func(...args);
    }
    return curried.bind(null, ...args);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdds = curryBind(add);

console.log(curriedAdds(1)(2)(3));
