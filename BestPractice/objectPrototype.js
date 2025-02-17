function Player(name, age) {
  this.name = name;
  this.age = age;
}

Player.prototype.play = function () {
  console.log(`${this.name} is playing`);
};

let sakib = new Player("Sakib", 22);
let hasib = new Player("Hasib", 21);

console.log(sakib);
console.log(hasib);

hasib.play();
