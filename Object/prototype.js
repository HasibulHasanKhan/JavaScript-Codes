function Person() {
  (this.name = "John"), (this.age = 23);
}

let Person1 = new Person();
let Person2 = new Person();

// add a new property to the constructor function.
Person.prototype.gender = "Male";

console.log(Person1.gender);
console.log(Person2.gender);

//Access the prototype of a constructor functin from its object.

console.log(Object.getPrototypeOf(Person1));
