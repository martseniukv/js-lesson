import TodoItem from "./item";
import {useEffect} from "react";
import {getAllTodos} from "../../../store/thunks/todoThunk";
import {useDispatch, useSelector} from "react-redux";

function TodoList({todos, onToggle, onRemove}) {
    console.log("Render List");

    // const dispatch = useDispatch();
    // const {
    //     todos,
    //     error
    // } = useSelector(state => state.todos);
    //
    //
    // useEffect(() => {
    //     let allTodos = getAllTodos();
    //     dispatch(allTodos);
    // }, []);
    //
    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }
    return (
        todos.map(todo => (
            <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        ))
    );
}

export default TodoList;