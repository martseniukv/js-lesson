import './TodoItem.css';
import {useState} from "react";


export default function Item(
    {
        todo,
        toggleTodo,
        deleteTodo,
        editTodo
    }) {

    const [isEditing, setIsEditing] = useState(true);
    const [newText, setNewText] = useState(todo.text);

    const handleToggle = () => {
        toggleTodo(todo.id);
    }

    const handelDelete = () => {
        deleteTodo(todo.id);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleChange = (e) => {
        setNewText(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            saveEdit();
        }
    }

    const saveEdit = () => {
        newText.trim() ? editTodo(todo.id, newText) : setIsEditing(todo.text);
        setIsEditing(false);
    }

    return (
        <div
            className={`todoItem ${todo.completed ? 'completed' : ''}`}
            onClick={handleToggle}
            onDoubleClick={handleEdit}
        >

            <div>
                {
                    isEditing ?
                        <input
                            type="text"
                            placeholder="New test for todo..."
                            value={newText}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            onBlur={saveEdit}
                        />
                        :
                        <span>{todo.text} {todo.smile}</span>
                }
                <button onClick={handelDelete}>X</button>
                <button onClick={handleEdit}>Edit</button>
            </div>


        </div>
    )
}