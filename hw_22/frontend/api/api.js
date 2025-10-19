import {API_URL, MOVIE_URL} from "../config.js";

async function getMovies() {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}`);
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}

async function addMovie(movie) {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}`, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
            }
        });
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}

async function getMovieById(id) {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}/${id}`, {})
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}

async function updateMovie(id, movie) {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
            }
        });
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}

async function updateMovie(id, movie) {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
            }
        });
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}

async function deleteMovie(id) {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}/${id}`, {
            method: "DELETE",
        });
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}

async function getReviewsNyMovieId(movieId) {
    try {
        const res = await fetch(`${API_URL}${MOVIE_URL}/${movieId}/reviews`, {
            headers: {
                "Accept": "application/json"
            }
        });
        return await res.json();
    } catch (e) {
        throw new Error(e);
    }
}