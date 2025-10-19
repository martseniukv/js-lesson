import {createAsyncThunk} from "@reduxjs/toolkit";
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async (_, {rejectWithValue}) => {

        try {
            const res = await fetch(`${BASE_URL}?_limit=10`);
            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }
            return await res.json();
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

export const getPostById = createAsyncThunk(
    "posts/getPostById",
    async (id, {rejectWithValue}) => {

        try {
            const res = await fetch(`${BASE_URL}/${id}`);
            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }
            return await res.json();
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)

export const getComments = createAsyncThunk(
    "posts/getComments",
    async (postId, {rejectWithValue}) => {

        try {
            const res = await fetch(`${BASE_URL}/${postId}/comments?_limit=10`);
            if (!res.ok) {
                throw new Error("Failed to fetch posts");
            }
            return await res.json();
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)