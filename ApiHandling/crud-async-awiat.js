async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error("There was an error");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
fetchData();

// Post request using async - await :
async function createPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Contend-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Post",
        body: "This is the post body",
        userId: 1,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}

createPost();

// Put request using asymc-await :

async function updatePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Updated This",
          body: "Updated body",
          userId: 2,
        }),
      }
    );

    const data = await response.json();
    console.log(data);
  } catch (err) {}
}
updatePost();

// delete  requset :

async function deletePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );

    const data = await response.json();
    console.log("Deleted", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

deletePost();
