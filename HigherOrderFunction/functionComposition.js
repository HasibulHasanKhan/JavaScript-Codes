const add = (x) => x + 2;
const multiply = (y) => y * 2;

const compose = (mul, add) => (x) => mul(add(x));

const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(5));
