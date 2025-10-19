import React, {useState} from 'react';
import {List} from "./components/List";

export function Todo() {

    const [todos, setTodos] = useState([
        {id: 1, text: "Learn JS", completed: true},
        {id: 2, text: "Learn TypeScript", completed: true},
        {id: 3, text: "Learn React", completed: false},
        {id: 4, text: "Learn Redux", completed: false},
    ]);

    const toggleTodo = (id) => {

        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            })
        )
    }
    const deleteTodo = (id) => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    const editTodo = (id, newText) => {
        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {...todo, text: newText}
                }
                return todo;
            })
        )
    }

    return (
        <div>
            <h1>Todo page</h1>
            <List todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
            />
        </div>
    )
}