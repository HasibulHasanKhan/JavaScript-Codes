function setData(key, value) {
  sessionStorage.setItem(key, value);
  alert(`Set ${key} to ${JSON.stringify(value)}`);
}

function getData(key) {
  const value = sessionStorage.getItem(key);
  if (value) {
    alert(`The value for ${key} is ${value}`);
  } else {
    alert(`${key} does not exist in session storage.`);
  }
}

function removeData(key) {
  sessionStorage.removeItem(key);
  alert(`Removed ${key} from session storage.`);
}

function clearData() {
  sessionStorage.clear();
  alert("Cleared all data from session storage.");
}

function lengthData() {
  const length = sessionStorage.length;
  alert(`There are ${length} items in session storage.`);
}
