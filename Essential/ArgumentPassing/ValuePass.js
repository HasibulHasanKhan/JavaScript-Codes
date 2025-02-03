// Pass by value : Primitive
function updateValue(x) {
  x = 20;
  console.log("Inside function: ", x);
}

let a = 12;
updateValue(a);
console.log("Outside function:", a);

// Pass by reference : Non-primitive
function updateValue2(obj) {
  obj.name = "Updated Name";
}
let person = { name: "Hasib" };

updateValue2(person);
console.log(person.name);

//
function modifyObject(obj) {
  obj.age = 30; // Modifies original
}

let user = { name: "Alice", age: 25 };
modifyObject(user);
console.log(user.age); // 30

// Note : Reassigning the reference (does NOT affect the original object).
function reassignObject(obj) {
  obj = { name: "New User", age: 40 };
}

let users = { name: "Alice", age: 23 };
reassignObject(users);

console.log(users.age);

// Arrays are passed by reference :
function modifyArray(arr) {
  arr.push(7); // modify original array.
}

let numbers = [1, 2, 3, 3, 3];
modifyArray(numbers);
console.log(numbers);

// avoid modify array.

function modifyArray(arr) {
  let newArr = [...arr];
  newArr.push(5);
  console.log("Inside function:", newArr);
}

let number = [3, 3, 3, 2, 5];
modifyArray(number);
console.log("Outside function:", number);
