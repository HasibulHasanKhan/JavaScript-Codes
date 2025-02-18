let person = { name: "John", age: 30, city: "New York" };

// for (let key in person) {
//   console.log(`${key} is ${person[key]}`);
// }

// //---------------------------------------
// //Return new array :
// //Object.key()
// console.log(Object.keys(person));

// //Object.value()
// console.log(Object.values(person));

// //Object.entries()
// console.log(Object.entries(person));

// //----------------------------------------
// Object.entries(person).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

Object.entries(person).forEach(([keys]) => {
  console.log(keys);
});
