const form = document.querySelector("form");
main();

function main() {
  newPost("Frida", "Det var trevligt tack");
  form.addEventListener("submit", submitForm);
}

function submitForm() {
  const name = document.getElementById("name-input").value;
  const text = document.getElementById("text-input").value;
  console.log(name);
  console.log(text);
  newPost(name, text);
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

function getOutput(className, text) {
  const output = document.createElement("p");
  output.classList.add(className);
  if (className === "name-input") output.style.fontWeight = "bold";
  const nodeName = document.createTextNode(text);
  output.appendChild(nodeName);
  return output;
}
