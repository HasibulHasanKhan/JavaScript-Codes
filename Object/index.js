/**
 *  Object.assign(target, source)
 * ------------------------------------------
 * Copies all enumerable properties from one  or  more source objects to a target object.
 *
 */

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// Object.assign(target, source);
// // source properties appent with target.
// //2 . Object.create (proto)
// // Create a new object wtih the specified prototype .

// const parent = {
//   greet: function () {
//     console.log("Hello");
//   },
// };
// const child = Object.create(parent);
// child.great();
//// Object.entries(object)
//Returns an array of [Key, value] pairs from an Object.

// const user = { name: "Jhon", age: 30 };
// console.log(Object.entries(user));
////---------------------------------------
// const child = Object.create(parent)

// Object.entries(object)
// Object.fromEntries()
//--------------------------------------------
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// let text = Object.entries(person);
// console.log(text);
//-------------------------------------
// const fruits = { Banana: 300, Orange: 200, Apples: 300 };
// let text = "";
// for (let [fruit, amount] of Object.entries(fruits)) {
//   text += fruit + ":" + amount + "\n";
// }

// console.log(text);
// const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

// let text = "";
// for (let [fruit, amount] of Object.entries(fruits)) {
//   text += fruit + ": " + amount + "\n"; // Add a newline instead of <br> for console output
// }

// console.log(text);
