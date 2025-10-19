import {useEffect, useState} from "react";
import Post from "./components/post";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getAllPosts} from "../../store/thunks/postsThunk";

export default function PostsRedux() {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    let {posts, loadingPosts, error} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    if (loadingPosts) {
        return <h2>Loading posts....</h2>
    }
    if (error) {
        return <span>{error.message}</span>;
    }

    console.log("Posts:", posts);
    return (
        <div className="posts">

            <h1>Posts</h1>
            {posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}