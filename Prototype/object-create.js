const animal = {
  type: "Mammal",
  makeSound() {
    console.log("Some generic sound.");
  },
};

const dog = Object.create(animal);
// dog.bark = function () {
//   console.log("Woof!");
// };
let a = 4;
let b = 4;
const res = a === b;
console.log(res);
const bool = animal === dog.__proto__;
// const bool = animal.prototype === dog.__proto__;
console.log(bool);

//-----------------------
class Animal {
  constructor() {}
}
Animal.prototype.type = "Mammal";

const dog2 = new Animal();

console.log(dog2.__proto__ === Animal.prototype); // true

//-----------------------------
function Animal2() {}
Animal2.prototype.type = "Mammal";

const dog3 = new Animal2();

console.log(dog3.__proto__ === Animal2.prototype); // true

//-------------------------------
// const animal3 = {
//   type: "Mammal",
//   makeSound() {
//     console.log("Some generic sound.");
//   },
// };

// const dog4 = Object.create(animal3);

// dog4.__proto__.name = "abc";
