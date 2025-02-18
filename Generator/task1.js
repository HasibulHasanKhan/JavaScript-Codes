let object = {
  value1: 1,
  value2: 2,
  value3: 3,
};

function* generator(obj) {
  let entries = Object.entries(obj);
  for (let element of entries) {
    yield element[1];
  }
}

const iterator = generator(object);

console.log([...iterator]);
