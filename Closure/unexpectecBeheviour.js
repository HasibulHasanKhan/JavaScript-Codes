// Closures capture variables by reference, not by value.

function createFunction() {
  let arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }

  return arr;
}

const funcs = createFunction();
funcs[0]();
funcs[1]();

// Why does this happen?
// i is a global variable (var has function scope).
// By the time the functions execute, i has already incremented to 3.

//--------------------------
//Fix with let (Block Scope)

function createFunction2() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}
const func = createFunction2();
func[0](); // Output: 0
func[1](); // Output: 1
func[2](); // Output: 2
