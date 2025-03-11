function setSessionStorage(key, value) {
  localStorage.setItem(key, value);
  alert(`Stored: ${key} = ${value}`);
}

function getSessionStorage(key) {
  const value = localStorage.getItem(key);
  alert(
    value !== null
      ? `Retrieved: ${key} = ${value}`
      : `${key} not found in localStorage`
  );
}

function removeSessionStorage(key) {
  localStorage.removeItem(key);
  alert(`Removed: ${key}`);
}

function clearSessionStorage() {
  localStorage.clear();
  alert("All local storage cleared");
}
