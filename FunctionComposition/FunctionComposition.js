// Function Composition (Combining Functions)

const add = (num) => num + 12;

const multiply = (num) => num * 2;

const combined = (num) => multiply(add(num));

console.log(combined(3));

// Function Composition Using a Helper Function

// Instead of manually nesting functions, we can create a compose function:
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const adds = (num) => num + 5;
const multiplys = (num) => num * 2;
const newFunction = compose(multiplys, adds);
console.log(newFunction(10));
