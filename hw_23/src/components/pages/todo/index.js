import React from 'react';
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, text: "Learn JS", completed: true},
                {id: 2, text: "Learn TypeScript", completed: true},
                {id: 3, text: "Learn React", completed: false},
                {id: 4, text: "Learn Redux", completed: false},
            ]
        }
    }

    toggleTodo = (id) => {
        this.setState((prevState) => {
            const updateTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo;
            });
            return {todos: updateTodos};
        });
    }

    deleteTodo = (id) => {

        this.setState((prevState) => ({
            todos: prevState.todos.filter(todo => todo.id !== id)
        }));
    }

    render() {
        return (
            <div>
                <h1>Todo page</h1>
                <Header/>
                <Form/>
                <List todos={this.state.todos}
                      toggleTodo={this.toggleTodo}
                      deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default Index;