import { fetchPosts } from "./fetchPosts.js";

const form = document.getElementById("form");
document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  submitForm();
});
addAllPosts();

async function addAllPosts() {
  const result = await fetchPosts();
  for (var i in result) {
    createNewPost(result[i][0], result[i][1]);
  }
}

function submitForm() {
  const name = document.getElementById("input-name").value;
  const text = document.getElementById("text-textarea").value;
  createNewPost(name, text);
}

function createNewPost(name, text) {
  const allPosts = document.getElementById("all-posts");
  const aCommentSection = document.createElement("div");
  aCommentSection.classList.add("bg-white");
  aCommentSection.classList.add("post-section");
  aCommentSection.innerHTML = `
  <div class="d-flex flex-row user p-2">
  <div class="d-flex flex-column ml-2">
    <span class="name font-weight-bold">${name}</span>
  </div>
    </div>
    <div class="mt-2 p-2">
  <p class="post-content">
  ${text}
  </p>
</div>
  </div>
`;
  allPosts.appendChild(aCommentSection);
}
