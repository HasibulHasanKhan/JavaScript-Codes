// this in an object method :
// when this is used inside an object method, it refers to the object itself.

// const obj = {
//   name: "Hasib",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

//-------------------------------------
// 2. this in arrow function :
// arrow function do not have their own this. Instead , they inherit this from their surrounding lexical scope.

// const obj = {
//   name: "Alice",
//   greet: () => {
//     console.log(this.name); // undefined (because `this` refers to the outer scope, which is the global object)
//   },
// };
// obj.greet();

// using arrow function correctly :

// const obj = {
//   name: "Hasib",
//   greet: function () {
//     const arrowFunc = () => {
//       console.log(this.name);
//     };
//     arrowFunc();
//   },
// };

// obj.greet();

// this in constructor functions refers to the newly created object.

// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Alice");
// console.log(p1.name); // "Alice"

//If we forget to use new, this will refer to the global object (window in browsers), which is unintended.
// function Person2(name) {
//   this.name = name;
// }

// const p = Person2("Alice"); // Forgot 'new'
// console.log(p); // undefined
// console.log(window.name); // "Alice" (polluting the global object)

//-------------------
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const p1 = Person("Alice");
// p1.greet(); // "Hello, my name is Alice"

// this in Event Listeners

// document.querySelector("Button").addEventListener("click", function () {
//   console.log(this);
// });

// note : arrow function , this will not refer to the element, but to the surrounding scope.

// document.querySelector("button").addEventListener("click", () => {
//   console.log(this); // window (global scope)
// });
// const obj = {
//   name: "Alice",
//   greet: function () {
//     setTimeout(function () {
//       console.log(this.name); // undefined (in strict mode) or window.name (global)
//     }, 1000);
//   },
// };
// obj.greet();

// Fix using Arrow Function

// const obj2 = {
//   name: "Alice",
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.name); // "Alice"
//     }, 1000);
//   },
// };
// obj2.greet();
console.log(this); // undefined
