function MyClass() {
  this.data = "Leaked";
  document.getElementById("myBtn").addEventListener("click", function () {
    console.log(this.data); // `this` refers to the button, not MyClass
  });
}
new MyClass();

//-------------------------------------
function MyClass() {
  this.data = "Safe";
  document.getElementById("myBtn").addEventListener("click", () => {
    console.log(this.data); // `this` now correctly refers to MyClass
  });
}
new MyClass();
