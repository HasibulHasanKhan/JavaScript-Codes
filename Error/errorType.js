// Syntax error :

// console.log("Hello";

// Reference error :

// console.log(myVar); // myVar is not defined

// Type error :
// let num = 5;
// num.toUpperCase(); // Error: num is a number, not a string
// console.log(num);

// Range error :
// let arr = new Array(-5); //RangeError: Invalid array length

// Try-Catch-Finally Block :

// try {
//   let result = 4 / 2;
//   console.log(result);
// } catch (err) {
//   console.log("Erro:", err.message);
// } finally {
//   console.log("This always runs, error or not ");
// }

// Throwing Custom Errors :
// function checkAge(age) {
//   if (age < 18) {
//     throw new Error("You must be at least 18 years old");
//   }
//   console.log("Access granted");
// }
// try {
//   checkAge(12);
// } catch (err) {
//   console.log(err.message);
// }

// Custom Error Classes :

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// try {
//   throw new ValidationError("Invalid input data!");
// } catch (err) {
//   console.log(`${err.name}: ${err.message}`);
// }

// Using try...catch with Asynchronous Code :
// fetch(url)
//   .then((res) => res.json())
//   .catch((err) => console.log("Fetch error:", err.message));

// for aync / await

// async function fetchData() {
//   try {
//     let response = await fetch("invalid - url");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// fetchData();
// The onerror global event handler :
// the window.onerror handler catches all uncaught error :
// window.onerror = function (message, source, lineno, colno, error) {
//   console.log();
//   return true; // prevent default error lagging
// };

// undefinedFuntion();

// Using try...catch with JSON Parsing :

try {
  let jsonData = '{"name": "John", "age": 30}';
  let parsedDaa = JSON.parse(jsonData);
  console.log(parsedData);
} catch (err) {
  console.log("JSON parsing error:", err.message);
}
