function apiFunction(url) {
  fetch(url).then((res) => {
    console.log(res.data);
  });
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");
