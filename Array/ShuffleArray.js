function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
console.log(shuffleArray([1, 2, 3, 4, 5])); // Example output: [3, 1, 5, 4, 2]
console.log(shuffleArray(["a", "b", "c", "d", "e"])); // Example output: ["c", "e", "a", "b", "d"]
console.log(Math.random() * 10 + 1);
