function customMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
const nums = [1, 2, 3];
const doubled = customMap(nums, (num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]
console.log(nums);
