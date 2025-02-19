// expanding an array :

const numbers = [1, 2, 3];
console.log(...numbers);

// copy of array :
const originalArr = [2, 3];
const cparr = [...originalArr];

//merging arra :
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

//adding element while copy :
const newNum = [2, 3, ...numbers, 7, 7];
console.log(newNum);
//remove dublcate :
const unique = [...new Set(newNum)];
console.log(unique);

// cloning object :
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2);
//merging object :
const person = { name: "John", age: 30 };
const job = { role: "Developer", salary: 5000 };
const merge = { ...person, ...job };
console.log(merge);
// overriding obj :
const obj11 = { a: 1, b: 2 };
const obj21 = { b: 3, c: 4 };

const merged = { ...obj11, ...obj21 };
console.log(merged); // Output: { a: 1, b: 3, c: 4 }
// adding new properties while coping :
const user = { name: "Alice", age: 25 };
const updateUser = { ...user, city: "New York" };
console.log(updateUser);

// passing array element as argument :
function sum(a, b, c) {
  return a + b + c;
}

const number = [1, 23, 4];
console.log(sum(...number));

// math.max() :
const nums = [3, 3, 4, 4, 4, 4];
console.log(Math.max(...nums));

// spread operator with string :
const str = "Hello";
const charArray = [...str];
console.log(charArray);
