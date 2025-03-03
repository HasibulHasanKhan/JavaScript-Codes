class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log("Some generic sound.");
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  bark() {
    console.log("Woof! Woof!");
  }
  play() {
    console.log(`The type is: ${this.name} and age is: ${this.age}`);
  }
}

const myDog = new Dog("Valo-Dog", 22);

console.log(myDog.name);
myDog.play();
