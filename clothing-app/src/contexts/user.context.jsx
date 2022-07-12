import { createContext, useEffect, useReducer } from 'react'
import { createAction } from '../utils/reducer/reducer.utils';

import { onAuthStateChangedListener, createUserDocumentfromAuth } from '../utils/firebase/firebase.utils'

// value you want to acces
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log("dispatch")
    console.log(action)
    const { type, payload } = action
    

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }

}

const INITIAL_STATE = {
    currentUser: null
}

// the component
export const UserProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE)
    const { currentUser } = state
    console.log(currentUser)
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    }
    const value = { currentUser, setCurrentUser }


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentfromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
