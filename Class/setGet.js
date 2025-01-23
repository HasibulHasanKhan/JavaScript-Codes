// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   get details() {
//     return `${this.make} ${this.model}`;
//   }
//   set details(info) {
//     const [make, model] = info.split(" ");
//     this.make = make;
//     this.make = make;
//   }
// }
// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model);
//     this.year = year;
//   }
//   get details() {
//     return `${super.details()} ${this.year}`;
//   }
// }

// const myCar = new Car(" Toyota", "Camry", 2024);
// console.log(myCar.details);

// myCar.details = "Honda Accord";
// console.log(myCar.details);
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  get details() {
    return `${this.make} ${this.model}`;
  }

  set details(info) {
    const [make, model] = info.split(" ");
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model); // Call the parent constructor
    this.year = year;
  }

  get details() {
    return `${super.details} ${this.year}`;
  }
}

const myCar = new Car("Toyota", "Camry", 2021);
console.log(myCar.details); // Output: Toyota Camry (2021)

myCar.details = "Honda Accord";
console.log(myCar.details); // Output: Honda Accord (2021)
