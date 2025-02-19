// const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(numbers); // Output: Set(5) { 1, 2, 3, 4, 5 }

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = new Set(numbers);
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// //
const colors = new Set(["red", "green", "blue"]);
console.log(colors.has("blue"));
// colors.delete("blue")
// colors.clear()

// colors.forEach((color) => {
//   console.log(color);
// });

//
// for (let color of colors) {
//   console.log(color);
// }
//
console.log(colors.values()); // Output: [Set Iterator] { 'red', 'green', 'blue' }

for (let color of colors.values()) {
  console.log(color);
}

// colors.entries()

// Output: [Set Entries] { ['red', 'red'], ['green', 'green'], ['blue', 'blue'] }

for (let entry of colors.entries()) {
  console.log(entry);
}

// colors.size()

// Practical Use Cases of Sets :

const numbers = [1, 23, 4, 5, 4];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// checking for unique value
function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

console.log(hasUniqueChars("hello"));
console.log(hasUniqueChars("world"));

// Intersection of two set :
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const Intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(Intersection);
