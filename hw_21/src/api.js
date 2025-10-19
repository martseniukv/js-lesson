const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function checkResponseStatus(res, entity) {
    if (!res.ok) {
        throw new Error(`Failed to load ${entity}: ${res.statusText}`);
    }
    return res.json();
}

export async function addNewPost(post) {
    try {
        const res = await fetch(`${API_URL}`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-Type": "application/json",
            }
        });
        return await res.json();
    } catch (err) {
        console.error(err.message);
    }
}

export async function getPosts() {
    try {
        const res = await fetch(`${API_URL}?_limit=10`);
        return await checkResponseStatus(res, "posts");
    } catch (err) {
        console.error(err.message);
    }
}

export async function loadComments(postId) {
    try {
        const res = await fetch(`${API_URL}/${postId}/comments?_limit=2`);
        return await checkResponseStatus(res, "comments");
    } catch (err) {
        console.error(err.message);
    }
}