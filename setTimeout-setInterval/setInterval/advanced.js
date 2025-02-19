// Using setTimeout() for Repeated Execution (Recursive Timeout)
// Instead of setInterval(), you can use setTimeout() recursively for better control.

// function repeatMessage() {
//   console.log("This runs every 2 seconds!");

//   setTimeout(repeatMessage, 2000); // Calls itself again after 2 seconds
// }

// repeatMessage();

// Using setTimeout() Inside setInterval()
// setInterval(() => {
//   setTimeout(() => {
//     console.log("Delayed message inside setInterval");
//   }, 1000);
// }, 3000);

//---------------------
// let a = setTimeout(() => {
//   setInterval(() => {
//     console.log("Hasib");
//   }, 1000);
// }, 5000);
// clearTimeout(a);

//------------------------
let a = setTimeout(() => {
  let b = setInterval(() => {
    console.log("Hasib");
  }, 1000);

  setTimeout(() => {
    clearInterval(b); // ১০ সেকেন্ড পর সেট ইন্টারভ্যাল বন্ধ করবে
  }, 10000);
}, 5000);
