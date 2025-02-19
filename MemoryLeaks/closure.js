function createSafeFunction() {
  let data = new Array(1000000).fill("Safe");
  return function () {
    console.log(data[0]);
    data = null; // Release memory
  };
}
let safeFunc = createSafeFunction();
safeFunc();
