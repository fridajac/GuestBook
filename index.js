const form = document.querySelector("form");
let nameInput = document.getElementById("name-input");
let textInput = document.getElementById("text-input");
const postSection = document.querySelector(".all-posts");
createNewPost("Frida", "Lorem ipsum dolor sit amet");
createNewPost(
  "Victor",
  "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
);

form.addEventListener("Submit", (e) => {
  console.log("hello");
});

function createNewPost(name, text) {
  const newPost = document.createElement("article");
  newPost.classList.add("post");

  const nameOutput = document.createElement("p");
  const textOutput = document.createElement("p");
  nameOutput.classList.add("name-output");
  textOutput.classList.add("text-output");

  const nodeName = document.createTextNode(name);
  const nodeText = document.createTextNode(text);
  nameOutput.appendChild(nodeName);
  textOutput.appendChild(nodeText);

  newPost.appendChild(nameOutput);
  newPost.appendChild(textOutput);
  postSection.appendChild(newPost);
}
