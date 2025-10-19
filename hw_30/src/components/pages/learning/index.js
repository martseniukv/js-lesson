import {useSelector} from "react-redux";
import TopicItem from "./components/TopicItem";
import TopicForm from "./components/TopicForm";
import TopicFilter from "./components/TopicFilter";


export default function Learning() {

    let {topics, filter} = useSelector((state) => state.learning);

    const filteredTopics = topics.filter(topic => {
        if (filter === "all") {
            return true;
        }
        return topic.status === filter;
    });

    return (
        <div>
            <h1>Learning Tracker</h1>

            <TopicForm/>
            <TopicFilter/>

            {filteredTopics.length === 0 ?
                (
                    <div>You don't have any topics</div>
                )
                : (
                    filteredTopics.map((topic) => (
                       <TopicItem key={topic.id} topic={topic} />
                    ))
                )
            }
        </div>
    )
}