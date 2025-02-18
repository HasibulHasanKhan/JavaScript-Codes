function customForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const numbers = [1, 3, 43, 3];

customForEach(numbers, (num, index) => {
  console.log(`Index: ${index} , value: ${num}`);
});

// Implementing a Custom reduce() :
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // Output: 15
