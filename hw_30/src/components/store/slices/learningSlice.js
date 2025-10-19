import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    topics: [],
    loading: false,
    error: false,
    filter: "all"
};

const learningSlice = createSlice({
    name: "learning",
    initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics.push(action.payload); //immer.js под капотом
        },
        deleteTopic: (state, action) => {
            state.topics.filter(topic => topic.id !== action.payload);
        },
        updateTopicStatus: (state, action) => {
            const {id, newStatus} = action.payload;
            state.topics = state.topics.map(topic => topic.id === id ? {...topic, status: newStatus} : topic);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const  {
    addTopic,
    deleteTopic,
    updateTopicStatus,
    setFilter
} = learningSlice.actions;

export default learningSlice.reducer;