import {NavLink} from "react-router";
import styles from "./post.module.css";

export default function Post({post}) {
    return (
        <div className={styles.post__container}>
            <h3>{post.title}</h3>
            <span className="post-title">{post.body.slice(0,50)}...x</span>
            <NavLink to={`/posts-redux/${post.id}`}>
                <button className="button">Details</button>
            </NavLink>
        </div>
    )
}