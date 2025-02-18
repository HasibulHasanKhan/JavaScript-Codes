let object = {
  value1: 1,
  value2: 2,
  value3: 3,
};
//console.log(Object.entries(object));[ [ 'value1', 1 ], [ 'value2', 2 ], [ 'value3', 3 ] ]

Object.prototype[Symbol.iterator] = function () {
  const entries = Object.entries(this);
  let count = entries.length;
  let index = 0;

  return {
    next() {
      if (count > 0) {
        let result = { done: false, value: entries[index][1] };
        count--;
        index++;
        return result;
      }
      return { done: true };
    },
  };
};

for (let element of object) {
  console.log(element);
}
