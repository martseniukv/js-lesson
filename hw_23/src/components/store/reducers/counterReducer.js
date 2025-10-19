import {DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, RESET} from "../action/actionTypes";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state + 1;
        }
        case DECREMENT: {
            return state - 1;
        }
        case INCREMENT_BY_AMOUNT: {
            return state + action.payload;
        }
        case RESET: {
            return 0;
        }
        default: return state;
    }
}

export default counterReducer;