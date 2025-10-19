import {createSlice} from "@reduxjs/toolkit";
import {getAllPosts, getComments, getPostById} from "../thunks/postsThunk";


const initialState = {
    posts: [],
    post: null,
    comments: [],
    loadingPosts: false,
    loadingPost: false,
    loadingComments: false,
    error: "null",
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.loadingPosts = true;
                state.error = "";
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.loadingPosts = false;
                state.posts = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.loadingPosts = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(getPostById.pending, (state) => {
                state.loadingPost = true;
                state.error = "";
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.loadingPost = false;
                state.post = action.payload;
            })
            .addCase(getPostById.rejected, (state, action) => {
                state.loadingPost = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(getComments.pending, (state) => {
                state.loadingComments = true;
                state.error = "";
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.loadingComments = false;
                state.comments = action.payload;
            })
            .addCase(getComments.rejected, (state, action) => {
                state.loadingComments = false;
                state.error = action.payload || action.error.message;
            })
    },
});

export default postsSlice.reducer;