function particial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = particial(multiply, 2);
console.log(multiplyBy2(3, 4));
