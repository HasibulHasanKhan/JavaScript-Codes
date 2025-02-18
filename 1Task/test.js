function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6

//--------------------------------------
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

const curriedAdds = curry(add);
console.log(curriedAdds(1)(2)(3)); // Output: 6
console.log(curriedAdds(1, 2)(3)); // Output: 6

//---------------
function add(...arg) {
  let a = arg[0];
  let b = arg[1];
  return a + b;
}

let r = add(2, 4);
console.log(r);
//-----------------------
const numbers = [1, 2, 3];
console.log(...numbers); // Output:
