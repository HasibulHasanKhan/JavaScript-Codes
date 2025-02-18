let number = [1, 2, 3];
let iterator = number[Symbol.iterator]();

console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
