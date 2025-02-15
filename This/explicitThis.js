const printName = function (v1, v2, v3) {
  console.log(`${this.name} is ${v1}, ${v2},${v3}`);
};

const hasib = {
  name: "Haisb",
  //   age: 22,
};

const v1 = "Well";
const v2 = "All-rounder";
const v3 = "Best-Player";

// const v = [v1, v2, v3];
// printName.call(hasib, v1, v2, v3);
// printName.apply(hasib, v);
const obj = printName.bind(hasib, v1, v2, v3);
obj();
