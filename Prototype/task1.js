const animal = {
  type: "Mammal",
  makeSound() {
    console.log("Some generic sound.");
  },
};

const dog = Object.create(animal);

dog.__proto__.name = "abc";
// dog.name = "abc";
console.log(animal.name);
console.log(dog.name);
