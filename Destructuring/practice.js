const number = [10, 20, 30];
const [a, b, c] = number;
console.log(a);
console.log(b);
//------------------------------------
const numbers = [2, 4, 5, 7];
const [first, , third] = numbers;
console.log(third);
// with rest ...
const num = [3, 4, 5, 5];
const [f, s, ...rest] = num;
console.log(rest);
console.log(f);

// 2. Destructuring Objects :

const person = { nam: "hasib", age: 39 };
const { nam, age } = person;
console.log(nam);
// using different variable name :

const person1 = { name: "Alice", age: 25 };
const { name: username, age: userage } = person1;
console.log(username);

// Function parameter Destructuring :

function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Emma", age: 28 };
displayUser(user);

// Array destructuring in function parameter :

function sum([a, b]) {
  return a + b;
}
let arr = [3, 4, 5];
console.log(sum(arr));

// Fetching API data with destructuring :

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then(({ name, email }) => {
    console.log(`User: ${name}, Email: ${email}`);
  });

// Normal way :
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log("User: " + user.name + ", Email: " + user.email);
  });
