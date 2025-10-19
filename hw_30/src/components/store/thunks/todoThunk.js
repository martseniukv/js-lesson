import {createAsyncThunk} from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodos = createAsyncThunk(
    "todos/getAllTodos",
    async (_, {rejectWithValue}) => {
        try {
            let response = await fetch(`${BASE_URL}?_limit=10`);

            if (!response.ok) {
                throw new Error("Failed fetch todos");
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const getTodoById = createAsyncThunk(
    "todos/getTodoById",
    async (id, {rejectWithValue}) => {
        try {
            let response = await fetch(`${BASE_URL}/${id}`);

            if (!response.ok) {
                throw new Error(`Failed fetch todos with id: ${id}`);
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const saveTodo = createAsyncThunk(
    "todos/createTodo",
    async (body, {rejectWithValue}) => {
        try {
            let response = await fetch(`${BASE_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw new Error("Failed create todo");
            }
            let newTodo = await response.json();
            return {...newTodo, id: Math.random()};
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const updateTodo = createAsyncThunk(
    "todos/updateTodo",
    async (body, {rejectWithValue}) => {
        try {
            let response = await fetch(`${BASE_URL}/${body.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) {
                throw new Error("Failed create todo");
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error);
        }
    });

export const deleteTodo = createAsyncThunk(
    "todos/deleteTodo",
    async (id, {rejectWithValue}) => {
        try {
            let response = await fetch(`${BASE_URL}/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`Failed delete todo with id: ${id}`);
            }
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    });