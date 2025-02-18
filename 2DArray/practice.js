function printMatrix(matrix) {
  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(mat);

/*

const arr = new Array(4).fill(2).map((num, index ) => num + index);

console.log(arr).

*/
// Basic Nested Loop Iteration :

let matrix = [
  [2, 3, 4, 5],
  [3, 4, 2, 4],
  [3, 4, 2, 2],
];

// for (let row of matrix) {
//   for (let value of row) {
//     console.log(value);
//   }
// }

// for (let i = 0; i < matrix.length; i++) {
//   // Outer loop (rows)
//   for (let j = 0; j < matrix[i].length; j++) {
//     // Inner loop (columns)
//     console.log(matrix[i][j]);
//   }
// }
// matrix.forEach((row) => {
//   row.forEach((element) => {
//     console.log(element);
//   });
// });

let doubleMatrix = matrix.map((row) => row.map((element) => element * 2));

console.log(doubleMatrix);
