function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generateNumbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// Nested object iteration :
let users = [
  { id: 1, name: "Alice", skills: ["JavaScript", "React"] },
  { id: 2, name: "Bob", skills: ["Python", "Django"] },
];

users.forEach((user) => {
  console.log(user.name);
  user.skills.forEach((skill) => console.log(skill));
});
