// Common function to handle fetch requests
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);

    // Check if response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Try to parse JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    return null; // Return null in case of an error
  }
}

// GET Request
async function getPost(postId) {
  const data = await fetchData(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (data) console.log("GET Response:", data);
}

getPost(1);

// POST Request
async function createPost() {
  const newPost = {
    title: "New Post",
    body: "This is the post body",
    userId: 1,
  };

  const data = await fetchData("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });

  if (data) console.log("POST Response:", data);
}

createPost();

// PUT Request (Updating Data)
async function updatePost(postId) {
  const updatedPost = {
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
  };

  const data = await fetchData(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    }
  );

  if (data) console.log("PUT Response:", data);
}

updatePost(1);

// DELETE Request
async function deletePost(postId) {
  const data = await fetchData(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  );

  if (data !== null) console.log(`Post ${postId} deleted successfully.`);
}

deletePost(1);
