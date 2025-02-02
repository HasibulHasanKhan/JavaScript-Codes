let sum = 0;

while (true) {
  let sum = Number(prompt("Enter a number: "));

  if (num < 0) {
    break;
  } else {
    sum += num;
  }
}

console.log(`Sum: ${sum}`);
