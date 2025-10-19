import React from "react";
import './TodoItem.css';

class TodoItem extends React.Component {

    handleToggle = () => {
        this.props.toggleTodo(this.props.todo.id);
    }
    handleDelete = () => {
        this.props.deleteTodo(this.props.todo.id);
    }

    render() {
        console.log(this.props);
        let todo = this.props.todo;
        console.log(todo);
        return (
            <div
                className={`todoItem ${todo.completed ? 'completed' : ''}`}
                onClick={this.handleToggle}
                onDoubleClick={this.handleDelete}
            >
                <span>{todo.text} {todo.smile}</span>
            </div>
        )
    }
}

export default TodoItem;