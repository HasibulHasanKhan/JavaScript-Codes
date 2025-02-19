// 5. Event Listeners Not Removed
// Cause: Event listeners keep references to objects in memory.

function addListener() {
  let element = document.getElementById("myButton");
  element.addEventListener("click", function () {
    console.log("Clicked");
  });
}
// Adding multiple event listeners without removing old ones
addListener();
addListener();

//-------------------------------------

function addSafeListener() {
  let element = document.getElementById("myButton");

  function handler() {
    console.log("Clicked");
  }

  element.addEventListener("click", handler);

  setTimeout(() => {
    element.removeEventListener("click", handler);
  }, 5000);
}

addSafeListener();
