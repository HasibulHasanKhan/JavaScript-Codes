function memoizedFibonacci() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      console.log(`Fetching from cache: ${n}`);
      return cache[n];
    }
    console.log(`Computing result for: ${n}`);

    if (n <= 1) return n;
    cache[n] = fib(n - 1) + fib(n - 2);

    return cache[n];
  };
}

const fib = memoizedFibonacci();
console.log(fib(10));
console.log(fib(10));
