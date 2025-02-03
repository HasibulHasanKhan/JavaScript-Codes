const student = {
  firstName: "Monica",
};

// getting property
Object.defineProperty(student, "getName", {
  get: function () {
    return this.firstName;
  },
});

// setting property :
Object.defineProperty(student, "changeName", {
  set: function (value) {
    this.firstName = value;
  },
});

console.log(student.firstName);

student.changeName = "Sarah";
console.log(student.firstName);

function concatenateStrings(str1, str2) {
  let txt = str1.concat(", ", str2, "!");
  return txt;
}

let result = concatenateStrings("Hello", "World");
console.log(result);
