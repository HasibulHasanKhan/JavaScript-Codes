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
