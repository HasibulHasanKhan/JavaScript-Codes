const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

console.log(person.fullName.call(person1, "Oslo", "Norway"));

console.log(person);

//-------------------------------

const vehicle = {
  setProperties: function (type, wheels) {
    this.type = type;
    this.wheels = wheels;
  },
};

const car = {};

vehicle.setProperties.call(car, "Sedan", 4);

console.log(car);
// Output: { type: 'Sedan', wheels: 4 }
