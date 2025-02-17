var includes = Symbol("My own array includes method");

Array.prototype[includes] = () => {
  console.log(`This is my array includes fuction`);
};

var myArray = [1, 2, 3, 4, 5];

console.log(myArray.includes(2));
console.log(myArray["includes"](2));

myArray[includes](2);
