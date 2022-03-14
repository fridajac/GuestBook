export async function fetchPosts() {
  var response = await fetch("http://127.0.0.1:5000/posts", {
    method: "GET",
    headers: {},
  });

  if (response.status == 400) {
    //   Error handling bad request
    console.log(response.status);
  }
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
}

export async function postPosts(data) {
  var response = await fetch("http://127.0.0.1:5000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status == 400) {
    //   Error handling bad request
    console.log(response.status);
  }
  return response.status;
}
