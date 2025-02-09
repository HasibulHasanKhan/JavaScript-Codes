function formatDate(format) {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");

  const month = String(now.getMonth() + 1).padStart(2, "0");

  const year = now.getFullYear();

  return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
}
console.log(formatDate("YYYY-MM-DD")); // Output: 2025-02-09
console.log(formatDate("DD/MM/YYYY")); // Output: 09/02/2025
console.log(formatDate("MM/DD/YYYY")); // Output: 02/09/2025
