// The for-in loop is used to iterate over the properties of an object.

let person = { name: "John", age: 25, city: "New York" };
for (let key in person) {
  console.log(key + " " + person[key]);
}
