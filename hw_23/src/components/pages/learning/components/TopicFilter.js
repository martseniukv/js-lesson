import {useDispatch, useSelector} from "react-redux";
import {setFilter} from "../../../store/action/learningActions";
import {memo} from "react";

const filters = [
    {value: "all", label: "ALL"},
    {value: "not-started", label: "Not started"},
    {value: "in-progress", label: "In progress"},
    {value: "done", label: "Done"}
];

function TopicFilter() {

    const dispatch = useDispatch();
    const currentFilter = useSelector((state) => state.learning.filter);

    const handleFilterChange = (filter) => {
        dispatch(setFilter(filter));
    }

    return (
        <div>
            <h4>Filter by:</h4>

            {filters.map(filter => (
                <button
                    type="button"
                    key={filter.value}
                    className="button"
                    style={{
                        fontWeight: currentFilter === filter.value ? "bold" : "normal",
                    }}
                    onClick={() => handleFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))
            }
        </div>
    )
}

export default memo(TopicFilter);