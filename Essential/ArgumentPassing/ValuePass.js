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
