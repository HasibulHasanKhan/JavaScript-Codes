const list = document.getElementById("list");

list.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    if (event.target.innerText === "জাভাস্ক্রিপ্ট") {
      event.target.style.backgroundColor = "yellow";
    } else {
      event.target.style.backgroundColor = "blue";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "Bangladesh";
  list.appendChild(newElement);
}
