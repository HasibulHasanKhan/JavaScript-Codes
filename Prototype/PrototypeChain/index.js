function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  return `${this.name} is eating`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} is barking`;
};

const dog1 = new Dog("Buddy", "Labrador");

console.log(dog1.eat()); // Inherited from Animal prototype
console.log(dog1.bark()); // Defined in Dog prototype
console.log(dog1.__proto__ === Dog.prototype); // true
console.log(dog1.__proto__.__proto__ === Animal.prototype); // true

//dog1 ---> __proto__ (Dog.prototype) ---> __proto__ (Animal.prototype) ---> __proto__ (Object.prototype) ---> null
