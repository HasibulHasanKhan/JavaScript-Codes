// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   area() {
//     console.log("Area method not defined for this shape");
//   }
// }
// class Circle extends Shape {
//   constructor(radius) {
//     super("Circle");
//     this.radius = radius;
//   }
//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super("Rectangle");
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }
// const circle = new Circle(10);
// console.log(`${circle.name} Area: ${circle.area()}`);

// const rectangle = new Rectangle(10, 5);
// console.log(`${rectangle.name} Area: ${rectangle.area()}`);
//===========================================
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Mammal extends Animal {
  constructor(name, type) {
    super(name); // Call Animal constructor
    this.type = type;
  }

  displayType() {
    console.log(`${this.name} is a ${this.type}.`);
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name, "Dog"); // Call Mammal constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  displayBreed() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy barks.
myDog.displayType(); // Output: Buddy is a Dog.
myDog.displayBreed(); // Output: Buddy is a Golden Retriever.
