import React from "react";
import TodoItem from "./Item";

export function List({
        todos = [],
        toggleTodo,
        deleteTodo,
        editTodo
}) {
    return (
        <div>
            {
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))
            }
        </div>
    )
}