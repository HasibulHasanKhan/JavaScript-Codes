// 1. var (Function Scoped)
// Can be re-declared and updated.
// Not block-scoped (does not respect {} except for functions).
// Hoisted but initialized as undefined.

var x = 10;
var x = 20; // Allowed
console.log(x); // 20

x = 30; // Allowed
console.log(x); // 30

// Example 2: Function Scope

function test() {
  var a = 5;
  if (true) {
    var a = 10; // Same variable (not block-scoped)
    console.log(a); // 10
  }
  console.log(a); // 10 (value changed)
}
test();

// 2. let (Block Scoped)

// Cannot be re-declared in the same scope.
// Can be updated.
// Block-scoped (respects {}).
// Hoisted but not initialized.

// Example 1: Cannot Re-declare :

let y = 10;
// let y = 20; // ❌ Error: Identifier 'y' has already been declared
y = 20; // ✅ Allowed (update value)
console.log(y); // 20

// Example 2: Block Scope

function test() {
  let a = 5;
  if (true) {
    let a = 10; // New variable (block-scoped)
    console.log(a); // 10
  }
  console.log(a); // 5 (separate variable)
}
test();

// 3. const (Block Scoped, Constant)
// Cannot be re-declared or updated.
// Block-scoped.
// Must be initialized during declaration.

// Example 1: Cannot Re-assign

const z = 50;
// z = 60; // ❌ Error: Assignment to constant variable
console.log(z); // 50
// Example 2: Works with Objects (But Properties Can Change)

const person = { name: "Alice" };
// person = { age: 25 }; // ❌ Error: Cannot reassign
person.name = "Bob"; // ✅ Allowed (modifying property)
console.log(person.name); // Bob

// Comparison Table
// Feature	       var	       let	    const
// Scope	       Function	   Block	Block
// Re-declaration  ✅ Yes	❌ No	❌ No
// Update Value	   ✅ Yes	✅ Yes	❌ No
// Hoisting	       ✅ Yes (initialized as undefined)	        ✅ Yes (not initialized)	✅ Yes (not initialized)
