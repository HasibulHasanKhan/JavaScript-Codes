function add(...arg) {
  let a = arg[0];
  let b = arg[1];
  return a + b;
}

let r1 = add(2, 4);
console.log(r1);

//-----------------------------------

function add2(...args) {
  return addsum(...args);
}

function addsum(a, b) {
  return a + b;
}

let r = add2(2, 4);
console.log(r);

//-----------------------

const number = [1, 2, 3];
console.log(...number);
//--------
const numbers = [5, 8, 2, 10, 3];
console.log(Math.max(numbers));
console.log(Math.min(numbers));
