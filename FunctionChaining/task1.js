class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    if (num !== 0) {
      this.value /= num;
    } else {
      console.error("Cannot divide by zero");
    }
    return this;
  }

  result() {
    console.log(this.value);
    return this.value;
  }
}

// Using method chaining
const obj1 = new Calculator(10)
  .add(5)
  .subtract(2)
  .multiply(3)
  .divide(2)
  .result(); // Output: 19.5
console.log(obj1);
