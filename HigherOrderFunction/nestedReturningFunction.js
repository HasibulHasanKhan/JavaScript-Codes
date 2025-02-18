function greeting(greet) {
  return function (name) {
    return function (punctuation) {
      return `${greet}, ${name}${punctuation}`;
    };
  };
}

const sayHello = greeting("Hello");
const greetAlice = sayHello("Alice");
console.log(greetAlice("!")); // Output: "Hello, Alice!"
console.log(greetAlice("!!!")); // Output: "Hello, Alice!!!"
