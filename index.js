const form = document.querySelector("form");
main();

function main() {
  form.addEventListener("Submit", (e) => {
    console.log("hello");
  });
  newPost("Frida", "Lorem ipsum dolor sit amet");
  newPost(
    "Victor",
    "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet"
  );
}

function newPost(name, text) {
  const postSection = document.querySelector(".all-posts");
  const newArticle = createArticle();

  newArticle.appendChild(getOutput("name-input", name));
  newArticle.appendChild(getOutput("text-input", text));
  postSection.appendChild(newArticle);
}

function createArticle() {
  const newSection = document.createElement("article");
  newSection.classList.add("post");
  return newSection;
}

function getOutput(input, text) {
  const output = document.createElement("p");
  const nodeName = document.createTextNode(text);
  output.appendChild(nodeName);
  return output;
}
