import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPostById, getComments} from "../../store/thunks/postsThunk";

export default function PostDetail() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        post,
        comments,
        loadingPost,
        loadingComments,
        error
    } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(getPostById(id));
    }, []);

    if (loadingPost) {
        return <h3>Fetching post data...</h3>
    }
    if (!post) {
        return <h3>Post data not found for post with id: - {id}</h3>;
    }
    if (error) {
        return <h3>Error: {error}</h3>
    }

    const navigatePosts = () => {
        navigate("/posts-redux");
    }

    const navigateHome = () => {
        navigate("/");
    }
    const handleLoadComments = () => {
        dispatch(getComments(id));
    }

    return (
        <div className="post-detail">
            <h1>Post Detail</h1>
            <h2>{post.title}</h2>
            <h4>{post.body}</h4>

            <button className="button" onClick={handleLoadComments}>
                {loadingComments ? "Loading" : "Show comments"}
            </button>

            {comments && comments.length > 0 && (
                <div className="comments-container">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <strong>{comment.name}</strong>{comment.email}
                                <p>{comment.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button className="button" onClick={navigatePosts}>See all posts</button>

            <button className="button" onClick={navigateHome}>Home</button>
        </div>
    )
}