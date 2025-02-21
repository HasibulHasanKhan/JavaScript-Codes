const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);
form.addEventListener("click", listener);
button.addEventListener("click", listener);

function listener(event) {
  console.log(event.currentTarget); // currentTarget and this same here.
}
