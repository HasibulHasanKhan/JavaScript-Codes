let myWindow = null; // Ensure it's null initially

const width = document.getElementById("width");
const height = document.getElementById("height");

width.innerHTML = "Window inner width is: " + window.innerWidth;
height.innerHTML = "Window inner height is: " + window.innerHeight;

function openWindow() {
  if (!myWindow || myWindow.closed) {
    myWindow = window.open("https://google.com");
  }
}

function closeWindow() {
  if (myWindow && !myWindow.closed) {
    myWindow.close();
    myWindow = null; // Reset after closing
  }
}
