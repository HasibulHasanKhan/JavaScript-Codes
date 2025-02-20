const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

// const greetFn = obj.greet();
const greetFn = obj.greet; // `this` is now `window`, so output is undefined.

greetFn();

// Fix using bind() :
const boundGreet = obj.greet.bind(obj);
boundGreet();

// other way :

// const obj = {
//   name: "Alice",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// const greetFn = () => obj.greet();
// greetFn(); // Logs: "Alice"
