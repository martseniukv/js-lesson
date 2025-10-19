const API_URL = "https://jsonplaceholder.typicode.com/posts";

const postList = document.querySelector("#post-list")
const postForm = document.querySelector("#post-form")

function checkResponseStatus(res, entity) {

    if (!res.ok) {
        throw new Error(`Failed to load ${entity}: ${res.statusText}`);
    }
    return res.json();
}

function addNewPost(post) {
    return fetch(`${API_URL}`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => res.json())
        .catch(err => console.error(err.message));
}

function loadPosts() {

    fetch(`${API_URL}?_limit=10`)
        .then(res => checkResponseStatus(res, "posts"))
        .catch(err => console.error(err.message));
}

function loadComments(postId) {

    fetch(`${API_URL}/${postId}/comments?_limit=2`)
        .then(res => checkResponseStatus(res, "comments"))
        .then(comments => {

            let commentsList = document.querySelector(`.comments-list[data-post-id="${postId}"]`);
            commentsList.innerHTML = "";
            comments.forEach(comment => commentsList.appendChild(createCommentElement(comment)));

        }).catch(err => console.error(err.message));
}

function createPostElement(post) {

    const li = document.createElement("li");
    li.classList.add("post-item");

    li.innerHTML = `
            <div class="post">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-content">${post.body}</p>
                <button class="comment-btn" data-post-id="${post.id}">Read Comments</button>
            </div>
            <div class="comments-container">
              <ul class="comments-list" data-post-id="${post.id}"></ul>
            </div>
            `;
    return li;
}

function createCommentElement(comment) {

    const li = document.createElement("li");
    li.classList.add("comment-item");
    li.dataset.id = comment.id;
    li.innerHTML = `
         <p class="comment-text">${comment.body}</p>
         <p class="comment-author">${comment.name}</p>
         <p class="comment-author-email">${comment.email}</p>
        `;
    return li;
}

postList.addEventListener("click", e => {

    if (e.target.classList.contains("comment-btn")) {
        loadComments(e.target.dataset.postId);
    }
});

postForm.addEventListener("submit", e => {

    e.preventDefault();
    let formData = new FormData(postForm);
    let title = formData.get("title").trim();
    let body = formData.get("body").trim();

    if (!title || !body) {
        alert("Title and body are required");
        return;
    }
    const bodyContent = {
        title,
        body,
        userId: 1,
    };
    addNewPost(bodyContent).then(post => postList.appendChild(createPostElement(post)));
    postForm.reset();
});

loadPosts();