function task1(callback) {
  setTimeout(() => {
    console.log("Task one ");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task two");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3");
    callback();
  }, 1000);
}

task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks done!");
    });
  });
});
