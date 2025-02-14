function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

const curriedSum =
  (...args) =>
  (...newArgs) =>
    sum(...args, ...newArgs);

console.log(curriedSum(1, 2)(3, 4));

console.log(curriedSum(1, 2)(3, 4), (5, 7));
