function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3));

// with bind :

const adds = (a, b) => {
  console.log(a);
  return a + b;
};
const double = adds.bind(null, 2);

console.log(double(5));
