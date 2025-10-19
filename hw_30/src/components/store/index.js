import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import learningReducer from "./slices/learningSlice";
import logger from "./middlewares/logger";
import postsReducer from "./slices/postSlice";
import todoReducer from "./slices/todoSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        learning: learningReducer,
        posts: postsReducer,
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;