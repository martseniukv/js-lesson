import {createSlice} from "@reduxjs/toolkit";
import {getAllTodos, getTodoById, saveTodo, deleteTodo, updateTodo} from "../thunks/todoThunk";

const initialState = {
    todos: [],
    todo: null,
    loadingTodos: false,
    loadingTodo: false,
    saveTodoStatus: false,
    deleteTodoStatus: false,
    error: "null",
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getAllTodos.pending, (state) => {
                state.loadingTodos = true;
                state.error = "";
            })
            .addCase(getAllTodos.fulfilled, (state, action) => {
                state.loadingTodos = false;
                state.todos = action.payload;
            })
            .addCase(getAllTodos.rejected, (state, action) => {
                state.loadingTodos = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(getTodoById.pending, (state) => {
                state.loadingTodo = true;
                state.error = "";
            })
            .addCase(getTodoById.fulfilled, (state, action) => {
                state.loadingTodo = false;
                state.todo = action.payload;
            })
            .addCase(getTodoById.rejected, (state, action) => {
                state.loadingTodo = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(saveTodo.pending, (state) => {
                state.saveTodoStatus = true;
                state.error = "";
            })
            .addCase(saveTodo.fulfilled, (state, action) => {
                state.saveTodoStatus = false;
                state.todos.push(action.payload);
            })
            .addCase(saveTodo.rejected, (state, action) => {
                state.saveTodoStatus = false;
                state.error = action.payload || action.error.message;
            })

            .addCase(updateTodo.pending, (state) => {
                state.error = "";
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                state.todos.filter(todoItem => todoItem.id === action.payload.id ? action.payload : todoItem);
            })
            .addCase(updateTodo.rejected, (state, action) => {
                state.error = action.payload || action.error.message;
            })

            .addCase(deleteTodo.pending, (state) => {
                state.deleteTodoStatus = true;
                state.error = "";
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.deleteTodoStatus = false;
                state.todos = state.todos.filter(todoItem => todoItem.id !== action.payload);
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                state.deleteTodoStatus = false;
                state.error = action.payload || action.error.message;
            })
    }
});

export default todoSlice.reducer;
