function add(...x) {
  return x.reduce((sum, value) => sum + value, 0);
}

const memo = (func) => {
  let cache = {};

  return function (...x) {
    console.log(cache);
    const key = JSON.stringify(x);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = func(...x);

      cache[key] = result;
      return result;
    }
  };
};

const calculate = memo(add);
console.log(calculate(12, 33, 44, 33, 77));
console.log(calculate(12, 33, 44, 33, 77));
