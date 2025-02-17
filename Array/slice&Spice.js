// slice () return new array.
// array.slice(start, end);

// let numbers = [1, 32, 4, 3];
// let sliceNumbers = numbers.slice(1, 3);

// console.log(sliceNumbers);

// splice() modify original array.
// arr.splice(start, deleteCount, item1, item2, ...);

let colors = ["red", "green", "yellow", "pink", "blue"];

// let removed = colors.splice(1, 3);
// console.log(removed);
// console.log(colors);

colors.splice(2, 0, "abc", "xyz");
console.log(colors);

let remove = colors.splice(4, 2);
console.log(remove);
let r = colors.splice(2, 1);
console.log(r);
