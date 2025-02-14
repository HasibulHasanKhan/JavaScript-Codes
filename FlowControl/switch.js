// let score = 90;

// switch (score) {
//   case 100:
//     console.log("Perfect score!");
//     break;
//   case 90:
//     console.log("Excellent!");
//     break;
//   default:
//     console.log("Keep trying.");
// }
function getSize(value) {
  switch (value) {
    case "S":
      return "Small";
    case "M":
      return "Medium";
    case "L":
      return "Large";
    default:
      return "Unknown size";
  }
}

console.log(getSize("M")); // Output: Medium
