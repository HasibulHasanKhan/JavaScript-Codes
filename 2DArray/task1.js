let matrix = [
  [2, 3, 4, 5],
  [3, 4, 2, 4],
  [3, 4, 2, 2],
];

let doubleMatrixs = matrix.map((row) => row.map((element) => element * 2));

let doubleMatrix = matrix.map((row) => {
  return row.map((element) => element * 3);
});

console.log(doubleMatrix);
