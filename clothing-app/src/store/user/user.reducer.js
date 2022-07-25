import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

// reducers receive every single action that is dispatched
// every single action passes through the reducer so by deefault
// we need to return state (aka previous state)
export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload }
        default:
            return state
    }
}