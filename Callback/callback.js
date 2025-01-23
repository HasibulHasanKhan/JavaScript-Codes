// function calculator(num1, num2, callback) {
//   let sum = num1 + num2;
//   if (callback) callback(sum);

//   return sum;
// }
// calculator(5, 7, function (result) {
//   console.log(result);
// });

//------------------------------
function display(some) {
  return some;
}

function calculator(num1, num2, callback) {
  sum = num1 + num2;
  if (callback) callback(sum);
}

const result = calculator(3, 4, display);
console.log(result);
