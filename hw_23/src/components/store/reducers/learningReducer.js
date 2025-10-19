import {ADD_TOPIC, UPDATE_TOPIC_STATUS, DELETE_TOPIC, SET_FILTER} from "../action/actionTypes";

const initialState = {
    topics: [],
    filter: "all"
}

const learningReducer = (state = initialState, action) => {
    console.log("state", state);
    switch (action.type) {
        case ADD_TOPIC:
            return {
                ...state,
                topics: [...state.topics, action.payload]
            }
        case UPDATE_TOPIC_STATUS:
            console.log("update topic", action.payload)
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic.id === action.payload.id
                        ? {...topic, status: action.payload.newStatus}
                        : topic
                )
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id !== action.payload)
            }
            case SET_FILTER:
                console.log("State, Action --",state, action.payload)
                return {
                    ...state,
                    filter: action.payload
                }
        default:
            return state;
    }
}

export default learningReducer;