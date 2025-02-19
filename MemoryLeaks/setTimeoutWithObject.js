// function startProcess() {
//   let obj = { name: "Important Data" };

//   let timeoutId = setTimeout(() => {
//     console.log(obj.name);
//   }, 2000);

//   obj = null;
//   clearTimeout(timeoutId);
// }
// startProcess();
// second example :
function startTimer() {
  let obj = { message: "Hello, World!" };
  let intervalId = setInterval(() => {
    console.log(obj.message);
  }, 1000);

  // Stop interval after some time
  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }, 5000);
}

startTimer();
