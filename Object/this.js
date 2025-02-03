// this inside a Nested Function :

// regular function :

const user = {
  name: "Hasib",
  greet: function () {
    function innerFunction() {
      console.log(this.name);
    }

    innerFunction();
  },
};

user.greet();

// Correct Approach: Use Arrow Function

const userFixed = {
  name: "Hasan",
  greet: function () {
    const innerFunction = () => {
      console.log(this.name);
    };
    innerFunction();
  },
};
userFixed.greet();
