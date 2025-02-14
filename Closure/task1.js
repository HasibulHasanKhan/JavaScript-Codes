function outerFunction(a) {
  let counter = 0;
  console.log(`${counter} is ${a}`);
  return function innerFunction() {
    counter++;
    console.log(`${counter} is ${a}`);
  };
  console.log(`${counter} is ${a}`);
}

const count = outerFunction(12);
count();
count();
count();
