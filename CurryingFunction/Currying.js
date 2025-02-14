function add(a, b, c) {
  return a + b + c;
}
console.log(add.length);
//--------------------------
function multiplyCurried(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const afunc = multiplyCurried(2);
const bfunc = afunc(3);
console.log(bfunc(4));
//------------------------
// with arrow function :
const multiplyCurried2 = (a) => (b) => (c) => a * b * c;

console.log(multiplyCurried2(2)(3)(4));
//------------------------------------

// using bind()

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = multiply.bind(null, 3);
console.log(curriedMultiply(3, 4));
