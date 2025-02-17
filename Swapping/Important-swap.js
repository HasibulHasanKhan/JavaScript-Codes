// Swapping Elements in an Array

let num = [1, 2, 3, 4];

[num[1], num[4]] = [num[3], num[1]];
console.log(num);

//-------------------------------
// Example: Swapping Two Variables
let a = 5,
  b = 10;

[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5

// Swapping Object Properties

let obj = { x: 20, y: 10 };

[obj.x, obj.y] = [obj.y, obj.x];
console.log(obj);

// 1. Swapping Multiple Variables at Once
let x = 1,
  y = 2,
  z = 3;

[x, y, z] = [z, x, y];

console.log(x, y, z);
