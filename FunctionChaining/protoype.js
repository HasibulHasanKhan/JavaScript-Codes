function Person(name) {
  this.name = name;
}

Person.prototype.setAge = function (age) {
  this.age = age;
  return this;
};

Person.prototype.setJob = function (job) {
  this.job = job;
  return this;
};

Person.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.job}.`);
};

new Person("Hasib").setAge(22).setJob("studnet").introduce();

/// using the methods separately (chaining won't work) :
function Person(name) {
  this.name = name;
}

Person.prototype.setAge = function (age) {
  this.age = age;
};

Person.prototype.setJob = function (job) {
  this.job = job;
};

Person.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.job}.`);
};

// Using the methods separately (chaining won't work)

const Hasib = new Person("Hasib");
Hasib.setAge(22);
Hasib.setAge(25);
Hasib.setJob("Software Engineer");
Hasib.introduce();
