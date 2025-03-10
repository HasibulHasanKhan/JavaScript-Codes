const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

function showAlert() {
  alert("Hasib");
}

function showConfirm() {
  let txt;

  if (window.confirm("Press a button.")) {
    txt = "You pressed ok. ";
  } else {
    txt = "You pressed cancel.";
  }
  confirm.innerHTML = txt;
}

function showPrompt() {
  const person = window.prompt("Please enter your name:", "Harry Potter");

  let txt;
  if (person === null || person === "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! how are you.";
  }
  prompt.innerHTML = txt;
}
