// Callbacks in Asynchronous Functions

// Promises with Higher-Order Functions
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 2000);
  });
}

fetchData().then(console.log); // Output after 2s: "Data loaded!"
