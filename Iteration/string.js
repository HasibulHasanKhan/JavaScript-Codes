let str = "JavaScript";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
//---------------------------------

// for ... of Loop :

// for (let char of str) {
//   console.log(char);
// }

// Using split(), map(), join() :

let upperStr = str
  .split("")
  .map((char) => char.toUpperCase())
  .join("-");
console.log(upperStr);

// forEach() with split() :

str.split("").forEach((char, index) => {
  console.log(`Index ${index}: ${char}`);
});
