// In JavaScript, scope determines the visibility and accessibility of variables. There are two main types of scope:

// Function Scope (Used by var)
// Block Scope (Used by let and const)

// 1. Function Scope (Scoped to the function):
// Variables declared with var are function-scoped.
// They are accessible anywhere within the function in which they are declared.
// They do not respect block {} scope unless it’s a function.

function example() {
  var x = 12;
  let y = true;
  if (y) {
    var x = 22;
    console.log("Inside if block:", x);
  }
  console.log("Outside if block:", x);
}
example();

// 2. Block Scope (Scoped to {} blocks)
// let and const are block-scoped.
// A variable declared with let or const only exists inside the block {} in which it was declared.
// This helps avoid unintended modifications of variables.
// Example: Block Scope with let

function example() {
  let y = 10;
  if (true) {
    let y = 20; // New variable (not modifying outer `y`)
    console.log("Inside if block:", y); // 20
  }
  console.log("Outside if block:", y); // 10 (separate variable)
}

example();

// with const :
function test() {
  const z = 5;
  if (true) {
    const z = 15; // This is a new variable, not overwriting the outer `z`
    console.log("Inside block:", z); // 15
  }
  console.log("Outside block:", z); // 5
}

test();
