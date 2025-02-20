let promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed");
    }
  }, 2000);
});

promise
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise completed"));
