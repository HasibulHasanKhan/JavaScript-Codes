/* 

--------------------------------------------------------
Use Cases
Scenario	throw new Error()	console.error()
Invalid form input	Yes	No
Debugging API responses	No	Yes
Critical system failure	Yes	No
Logging error details in production logs	No	Yes

--------------------------------------------------------
*/

/* 
When and Why to Use throw new Error()
Indicating Critical Errors: Use when the program cannot continue due to an invalid state.
Custom Error Handling: Helps propagate errors for structured error management.
*/

// function processOrder(quantity) {
//   if (quantity <= 0) {
//     throw new Error("Quantity must be greater than zero.");
//   }
//   console.log("Processing order for quantity:", quantity);
// }

// try {
//   processOrder(0 / 0); // Will throw an error.
// } catch (error) {
//   console.error("Error:", error.message); // Logs the error message.
// }
/**
 * When and Why to Use console.error()
Debugging and Logging: Used to display error messages during development.
Non-Critical Errors: Use when an error does not require program termination.
 */
// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/92s"
//     );
//     if (!response.ok) {
//       console.error("Failed to fetch data:", response.statusText); // Logs error.
//       return null;
//     }
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("Network error:", error.message); // Logs network-related errors.
//   }
// }

// fetchData();
