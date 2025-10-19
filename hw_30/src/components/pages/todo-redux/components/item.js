import {memo} from "react";

function TodoItem({todo, onToggle, onRemove}) {

    console.log(`Render: TODO item: ${todo.id}`);
    return (
        <div className="flex justify-between items-center p-2 bg-white shadow rounded mb-2">
            <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
                onClick={() => onToggle(todo)}
            >
                {todo.title}
            </span>
            <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => onRemove(todo.id)}
            >
                ✕
            </button>
        </div>
    );
}

export default memo(TodoItem);