obj1 = {
  fname: "Hasib",
  lname: "Hasan",
  fullName() {
    return `${fname} ${lname}`;
  },
};

const obj2 = Object.create(obj1);

// console.log(obj1.fname); // Hasib
// console.log(obj2.fname); // Hasib

obj2.__proto__.fname = "Emon";

// console.log(obj1.fname); // Emon
// console.log(obj2.fname); // Emon

console.log(obj1); // Emon
console.log(obj2); // Emon

const namea = "Hasib";
console.log(namea.__proto__);
console.log(namea.at(3));
