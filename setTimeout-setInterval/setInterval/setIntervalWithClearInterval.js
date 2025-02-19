function interval() {
  let count = 0;

  let intervalId = setInterval(() => {
    count++;

    console.log(`Counter: ${count}`);

    if (count === 5) {
      clearInterval(intervalId);
      console.log("Interval stopped");
    }
  }, 1000);
}
interval();
