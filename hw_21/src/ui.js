export function createPostElement(post) {

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

export function renderComments(postId, comments) {
    let commentsList = document.querySelector(`.comments-list[data-post-id="${postId}"]`);
    commentsList.innerHTML = "";
    comments.forEach(comment => commentsList.appendChild(createCommentElement(comment)));
}