// Advanced Use Case: Implementing Custom bind() using apply()

function customBind(fn, thisArg) {
  return function (...args) {
    return fn.apply(thisArg, args);
  };
}

function greet(name) {
  console.log(`Hello, ${name}. My name is ${this.name}.`);
}

const person = { name: "John" };
const boundGreet = customBind(greet, person);

boundGreet("Alice");

// doing this with bind :

function customBind(fn, thisArg) {
  return fn.bind(thisArg);
}

function greet(name, age, city) {
  console.log(
    `Hello, ${name}. My name is ${this.name}. I am ${age} years old and live in ${city}.`
  );
}

const persons = { name: "John" };
const boundGreets = customBind(greet, person);
boundGreet("Alice", 22, "New York");
