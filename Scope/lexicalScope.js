// 4. Lexical Scope with Closures
// A closure is created when an inner function "remembers" variables from its outer function, even after the outer function has finished executing.

// Example 4: Lexical Scope and Closures

function outerFunction(name) {
  let greeting = "Hello";

  return function innerFunction() {
    console.log(greeting + ", " + name);
  };
}

let sayHello = outerFunction("Alice");
sayHello(); // Output: Hello, Alice
