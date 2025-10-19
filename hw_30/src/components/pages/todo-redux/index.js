import {useEffect} from "react";
import {getAllTodos, deleteTodo, sa, saveTodo, updateTodo} from "../../store/thunks/todoThunk";
import {useDispatch, useSelector} from "react-redux";
import TodoInput from "./components/form";
import TodoList from "./components/list";


export default function TodoRedux() {

    const dispatch = useDispatch();
    const {
        todos,

        error
    } = useSelector(state => state.todos);


    useEffect(() => {
        let allTodos = getAllTodos();
        dispatch(allTodos);
    }, []);

    const handleAdd = (title) => {

        if (!title.trim()) {
            return;
        }
        dispatch(saveTodo({
            id: Math.random(),
            title,
            completed: false,
        }));
    };
    const handleToggle = (todo) => {
        dispatch(updateTodo(todo))
    };

    const handleRemove = (id) => {
        dispatch(deleteTodo(id));
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h2>Todo redux</h2>
            {
                <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
                    <h1 className="text-xl font-bold mb-4">📝 Todo List</h1>
                    <TodoInput onAdd={handleAdd}/>
                    <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
                </div>
            }
        </div>
    )
}