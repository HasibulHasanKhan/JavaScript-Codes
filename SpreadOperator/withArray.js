// const numbers = [1, 2, 3];
// console.log(...numbers); // Output: 1 2 3

// //---------------------------------
// const originalArray = [1, 2, 3];
// const copiedArray = [...originalArray];

// console.log(copiedArray); // Output: [1, 2, 3]
// console.log(originalArray === copiedArray); // Output: false (Different references)

//---------------------------------------

// const arr = [1, 2, 3];
// console.log(...arr);

function add(...arg) {
  let a = arg[0];
  let b = arg[1];
  return a + b;
}

let r = add(2, 4);
console.log(r);
