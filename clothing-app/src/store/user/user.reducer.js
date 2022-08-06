import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

// reducers receive every single action that is dispatched
// every single action passes through the reducer so by deefault
// we need to return state (aka previous state)
export const userReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action
    
    switch(type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload }
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null }
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return { ...state, error: payload }
        default:
            return state
    }
}