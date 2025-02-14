(function () {
  var num1 = 2;
  var num2 = 3;

  var sum = function () {
    return num1 + num2;
  };
  console.log(sum());
  console.dir(sum); // closure retain the variable reference.

  num1 = 6;
  num2 = 7;

  console.log(sum());
  console.log(sum);
})();
