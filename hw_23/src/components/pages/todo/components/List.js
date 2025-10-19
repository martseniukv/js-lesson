import React from "react";
import TodoItem from "./Item";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {todos, toggleTodo, deleteTodo} = this.props;
        console.log(todos);
        return (
            <div>
                {
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            deleteTodo={deleteTodo}
                        />
                    ))
                }
            </div>
        )
    }
}

export default TodoList;