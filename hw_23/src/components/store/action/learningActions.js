import {ADD_TOPIC, UPDATE_TOPIC_STATUS, DELETE_TOPIC, SET_FILTER} from "./actionTypes";

export const addTopic = (title, description) => {
    return {
        type: ADD_TOPIC,
        payload: {
            id: `${title}-${Math.random()}`,
            title,
            description,
            status: 'not-started'
        },
    }
}
export const updateTopicStatus = (id, newStatus) => {
    return {
        type: UPDATE_TOPIC_STATUS,
        payload: {id, newStatus}
    }
}

export const deleteTopic = (id) => {
    return {
        type: DELETE_TOPIC,
        payload: id
    }
}

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        payload: filter
    }
}