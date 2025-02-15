const Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },

    father: {
      name: "Mr. XYZ", // name is not defined it assign .
      printName: function () {
        console.log(this.name); // name =   Hasibul Hasan
      },
    },
  };
};

const hasib = new Person("Hasibul Hasan", 22);
hasib.printName();
hasib.father.printName();
