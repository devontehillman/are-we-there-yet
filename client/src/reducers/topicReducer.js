import { ADD_TOPIC } from "../actions/types";

const initialState = {
    topics: {}
};

// reducer function which take a state object and an action 
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOPICS:
            return {
                topics: state.topic
            };
        // case USER_LOADING:
        //     return {
        //         ...state,
        //         loading: true
        //     };
        default:
            return state;
    }
}