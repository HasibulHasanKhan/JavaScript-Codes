function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(1, 10)); // Output: A random number between 1 and 10
console.log(getRandomNumber(50, 100)); // Output: A random number between 50 and 100
console.log(getRandomNumber(-10, 10)); // Output: A random number between -10 and 10
