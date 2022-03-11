const form = document.getElementById("form");
const submitBtn = document
  .getElementById("btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    submitForm();
  });

function submitForm() {
  const name = document.getElementById("input-name").value;
  const text = document.getElementById("text-textarea").value;
  createNewComment(name, text);
}

function createNewComment(name, text) {
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
