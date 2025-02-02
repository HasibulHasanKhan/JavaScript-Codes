let num = 1;
while (num <= 20) {
  if (num % 2 == 0) {
    ++num;
    continue;
  }

  console.log(num);
  ++num;
}

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }
