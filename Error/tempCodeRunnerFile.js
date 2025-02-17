fetch(url)
  .then((res) => res.json())
  .catch((err) => console.log("Fetch error:", err.message));