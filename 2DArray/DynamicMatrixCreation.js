function createMatrix(rows, cols, initialValue = 0) {
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let row = new Array(cols).fill(initialValue);
    matrix.push(row);
  }

  return matrix;
}

let myMatrix = createMatrix(3, 4, 1);
console.log(myMatrix);
