function countUniqueValues(array) {
  return new Set(array).size;
}
console.log(countUniqueValues([1, 2, 2, 3, 4, 4, 5])); // Output: 5
console.log(countUniqueValues(["a", "b", "a", "c", "d", "d"])); // Output: 4
console.log(countUniqueValues([10, 20, 30, 10, 40, 50, 50])); // Output: 5
console.log(countUniqueValues([])); // Output: 0
//-----------------------------------
// Custom Using an Object.

function countUniqueValuesWithOccurrences(array) {
  const countMap = {};

  for (let num of array) {
    countMap[num] = (countMap[num] || 0) + 1;
  }
  return countMap;
}
console.log(countUniqueValuesWithOccurrences([1, 2, 2, 3, 4, 4, 5]));
