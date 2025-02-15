function Person(name, age) {
  //let this = Object.create(null);
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.name} years old`);
  // return this;
}

const Hasib = new Person("Hasibul Hasan", 22);
