function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isLeapYear(2024)); // Output: true (Leap Year)
console.log(isLeapYear(2023)); // Output: false (Not a Leap Year)
console.log(isLeapYear(2000)); // Output: true (Leap Year)
console.log(isLeapYear(1900)); // Output: false (Not a Leap Year)
