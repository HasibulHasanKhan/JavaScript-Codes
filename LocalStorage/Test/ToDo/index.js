function setItems(key, value) {
  //   localStorage.setItem(key, value);
  localStorage.setItem(key, JSON.stringify(value));
  //   alert(`Set ${key} to ${value}`);
  alert(`Set ${key} to ${JSON.stringify(value)}`);
}

function getItems(key) {
  const value = localStorage.getItem(key);
  alert(value ? `value: ${value}` : "No value found");
  //   alert(value ? `value: ${value}` : "No value found");
}

function clearItems() {
  localStorage.clear();
  alert("Cleared all items");
}

function removeItems(key) {
  localStorage.removeItem(key);
  alert(`Removed ${key}`);
}
