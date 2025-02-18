const toUpperCase = (str) => str.toUpperCase();
const exclaim = (str) => str + "!";
const repeat = (str) => str + " " + str;

const str = "hasib";
// const upper = toUpperCase(str);
// const excla = exclaim(upper);

// console.log(excla);
//  inside {} write return :

const value = (fn1, fn2) => (x) => fn2(fn1(x));
const compose = value(toUpperCase, exclaim);
const result = compose(str);

console.log(result);
