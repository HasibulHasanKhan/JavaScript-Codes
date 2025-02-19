function updatePerson(person) {
  let deepCopy = JSON.parse(JSON.stringify(person)); // Deep copy
  deepCopy.address.city = "New York";
  console.log("Inside function:", deepCopy);
}

let personObj = {
  name: "Alice",
  age: 25,
  address: { city: "London" },
};

updatePerson(personObj);
console.log(personObj.address.city);
