import * as AuthTypes from '../actionTypes/auth'

const initialState = {
    route: '',
    loggedIn: false
}

export default function Auth(state=initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}


