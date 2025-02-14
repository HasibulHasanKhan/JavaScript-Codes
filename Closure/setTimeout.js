// let name = "hasib";

// function Hasib() {
//   let name = "Emon";
//   console.log(name);
// }

// Hasib();
// console.log(name);
//--------------------------------
var a;
// let a;
function async() {
  //   a = 20;
  var a = 20;

  var myFunc = () => {
    console.log(a);
  };

  setTimeout(myFunc, 2000);
}

async();

a = 30;
console.log(a);
