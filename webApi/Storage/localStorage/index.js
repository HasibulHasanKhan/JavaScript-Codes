function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
  alert(`Stored: ${key} = ${value}`);
}

function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  alert(
    value !== null
      ? `Retrieved: ${key} = ${value}`
      : `${key} not found in localStorage`
  );
}

function removeLocalStorage(key) {
  localStorage.removeItem(key);
  alert(`Removed: ${key}`);
}

function clearLocalStorage() {
  localStorage.clear();
  alert("All local storage cleared");
}
