const width = document.getElementById("width");
const height = document.getElementById("height");
const availWidth = document.getElementById("availHeight");
const availHeight = document.getElementById("availHeight");
const colorDepth = document.getElementById("colorDepth");
const pixelDepth = document.getElementById("pixelDepth");

width.innerHTML = "Screen width: " + screen.width;
height.innerHTML = "Screen height: " + screen.height;
availWidth.innerHTML = "Screen availWidth: " + screen.availWidth;
availHeight.innerHTML = "Screen availWidth: " + screen.availHeight;
colorDepth.innerHTML = "Screen availWidth: " + screen.colorDepth;
pixelDepth.innerHTML = "Screen availWidth: " + screen.pixelDepth;
