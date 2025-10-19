import {useDispatch} from "react-redux";
import {useState, memo} from "react";
import {addTopic} from "../../../store/action/learningActions";


function TopicForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch( );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return
        }
        dispatch(addTopic(title, description));
        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add new topic</h3>

            <input
                className="input"
                type="text"
                name="topic"
                value={title}
                placeholder="Topic title"
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className={"input"}
                type="text"
                name="description"
                value={description}
                placeholder="Topic description"
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                className="button"
                type="submit"
            >Add new topic
            </button>
        </form>
    )
}

export default memo(TopicForm);