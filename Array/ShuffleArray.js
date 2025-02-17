function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
let arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr));

console.log(arr);
console.log(Math.random() * 10 + 1);
