function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

let person = { name: "Alice", age: 25, city: "London" };

greet(person);
//-----------------------------------------

// 5️⃣ Passing Object with Default Values

function greet({ name = "Guest", age = 18 } = {}) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet(); // Output: Hello Guest, you are 18 years old.
greet({ name: "Alice" }); // Output: Hello Alice, you are 18 years old.
