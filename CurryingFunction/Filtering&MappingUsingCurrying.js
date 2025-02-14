const filterGreaterThan = (threshold) => (number) => number > threshold;

const multiplyBy = (factor) => (number) => number * factor;

const processArray = (array, filterFunc, mapFunc) => {
  return array.filter(filterFunc).map(mapFunc);
};

const array = [1, 2, 3, 4, 5, 6];

// Filter numbers greater than 3 and multiply the result by 10
const result = processArray(array, filterGreaterThan(3), multiplyBy(10));

console.log(result); // Output: [40, 50, 60]
