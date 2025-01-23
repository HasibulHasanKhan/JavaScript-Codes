class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent class constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // Call the parent class's speak method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "Bulldog");
dog.speak(); // Output: Rex makes a sound. \n Rex barks.
