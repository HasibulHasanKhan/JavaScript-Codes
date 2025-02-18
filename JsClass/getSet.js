class Logger {
  static log(message) {
    console.log(`Log: ${message}`);
  }
}

class Calculator {
  constructor(value) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    Logger.log(`Added ${num}`);
  }

  get result() {
    // calc.result : no parenthesis
    return this.value;
  }
}

const calc = new Calculator(10);
calc.add(5);
console.log(calc.result()); // Output: 15
