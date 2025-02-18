class Vehicle {
  constructor(type) {
    this.type = type;
  }

  move() {
    console.log(`${this.type} is moving`);
  }
}

class Car extends Vehicle {
  constructor(brand) {
    super("Car");
    this.brand = brand;
  }
  move() {
    super.move();
    console.log(`${this.brand} is speeding`);
  }
}

const myCar = new Car("Tesla");
myCar.move();
