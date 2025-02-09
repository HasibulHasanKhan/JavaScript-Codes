function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const diffTime = Math.abs(d2 - d1);

  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log(daysBetween("2025-02-01", "2025-02-09")); // Output: 8
console.log(daysBetween("2024-12-31", "2025-01-01")); // Output: 1
console.log(daysBetween("2023-03-15", "2024-03-15")); // Output: 366 (leap year
