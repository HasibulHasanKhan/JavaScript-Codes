/*
Object.assign(target, source) create a shollow copy of an object . 

It only copies Primitive values(number, string) but nested object/arrays are still referenced.

*/
let original = {
  name: "Alice",
  details: { age: 24, city: "New York" },
};

let shallowCopy = Object.assign({}, original);

shallowCopy.name = "Bob";
shallowCopy.details.age = 22;

console.log(original.details.age);
console.log(shallowCopy.details.age);

// Deep copy using :
//JSON.parse (JSON.stringify(obj))

let originals = {
  name: "Alice",
  details: { age: 22, city: "New York" },
};

let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.details.age = 21; //affect only in deepcopy

console.log(original.details.age); //22 original remain unchange.
console.log(deepCopy.details.age);
