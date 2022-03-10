const form = document.querySelector("form");
const button = document.querySelector("button");
main();

function main() {
  createNewPost("Frida", "Det var trevligt tack");
  button.addEventListener("click", submitForm);
}

function submitForm() {
  const name = document.getElementById("name-input").value;
  const text = document.getElementById("text-input").value;
  console.log(name);
  console.log(text);
  createNewPost(name, text);
}

function createNewPost(name, text) {
  const postSection = document.getElementById("all-posts");
  const newArticle = createNewArticle();

  newArticle.appendChild(getOutput("name-input", name));
  newArticle.appendChild(getOutput("text-input", text));
  postSection.appendChild(newArticle);
}

function createNewArticle() {
  const newSection = document.createElement("article");
  newSection.classList.add("post");
  return newSection;
}

function getOutput(className, text) {
  const output = document.createElement("p");
  output.classList.add(className);
  if (className === "name-input") output.style.fontWeight = "bold";
  const nodeName = document.createTextNode(text);
  output.appendChild(nodeName);
  return output;
}
