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

// Swapping Characters in a String (Using Array)
let str = "Hello";
let arr = str.split("");
[arr[0], arr[2]] = [arr[2], arr[0]];
str = arr.join("");
console.log(str);

// Swapping Items Dynamically
function swapItems(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
let nums = [10, 20, 30, 40, 50];
swapItems(nums, 1, 3);

console.log(nums);
