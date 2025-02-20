const button = document.getElementById("button");

function debounce(fn, delay) {
  let timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(this);
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  }, 1000)
);
