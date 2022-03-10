const form = document.getElementById("form");
const submitBtn = document
  .getElementById("btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    submitForm();
  });

function submitForm() {
  const name = document.getElementById("inputName").value;
  const text = document.getElementById("textAreaText").value;
  createNewComment(name, text);
}

function createNewComment(name, text) {
  const allComments = document.getElementById("comments");
  const commentSection = document.createElement("div");
  commentSection.classList.add("bg-white");
  commentSection.classList.add("comment-section");
  commentSection.innerHTML = `
  <div class="d-flex flex-row user p-2">
  <div class="d-flex flex-column ml-2">
    <span class="name font-weight-bold">${name}</span>
  </div>
    </div>
    <div class="mt-2 p-2">
  <p class="comment-content">
  ${text}
  </p>
</div>
  </div>
`;
  allComments.appendChild(commentSection);
}
