function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded!");
    }, 2000);
  });
}

// fetchData().then(console.log);

// another way :
fetchData().then((result) => {
  console.log(result);
});

//
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(console.log);
