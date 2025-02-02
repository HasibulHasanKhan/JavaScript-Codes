// break and continue in Loops
// break: Exits the loop entirely.
// continue: Skips the current iteration and moves to the next one.

for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Example with continue:

for (let i = 0; i < 5; i++) {
  if (i == 2) continue;
  console.log(i);
}
