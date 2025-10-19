import {addNewPost, getPosts, loadComments} from "./api.js";
import {createPostElement, renderComments} from "./ui.js";

import './scss/style.scss';

const postList = document.querySelector("#post-list")
const postForm = document.querySelector("#post-form")

postList.addEventListener("click", async e => {

    if (e.target.classList.contains("comment-btn")) {
        let postId = e.target.dataset.postId;
        let comments = await loadComments(postId);
        renderComments(postId, comments);
    }
});

postForm.addEventListener("submit", async e => {

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
    let newPost = await addNewPost(bodyContent);
    postList.insertBefore(createPostElement(newPost), postList.firstChild);
    postForm.reset();
});

getPosts().then(posts => {
    posts.forEach(post => postList.appendChild(createPostElement(post)));
});