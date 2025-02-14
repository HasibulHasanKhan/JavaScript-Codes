// 🔹 1. Private Variables using Closures
// Closures allow us to create truly private variables because they are only accessible inside the function scope.

function createCounter() {
  var count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },

    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount());

console.log(counter.count);
