import {useDispatch} from "react-redux";
import {deleteTopic, updateTopicStatus} from "../../../store/slices/learningSlice";

export default function TopicItem({topic}) {

    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
        dispatch(updateTopicStatus({
            id: topic.id,
            newStatus: e.target.value
        }));
    }

    const handleDelete = () => {
        dispatch(deleteTopic(topic.id));
    }

    return (
        <div>
            <h4>{topic.title}</h4>
            <span>{topic.description}</span>

            <select value={topic.status} onChange={handleStatusChange}>
                <option value="not-started">Not started</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
            </select>

            <button onClick={handleDelete} type="button">X</button>
        </div>
    )
}