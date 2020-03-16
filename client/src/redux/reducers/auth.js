import * as AuthTypes from '../actionTypes/auth'

const initialState = {
    route: '',
    loggedIn: false,
    currentUser: ''
}

export default function Auth(state=initialState, action) {
    switch(action.type) {
        
        case AuthTypes.TOGGLE:
            return {...state, route: state.route = action.route}
        
        case AuthTypes.AUTHENTICATE:
            return {
                    ...state, loggedIn: state.loggedIn = true,
                    ...state, currentUser: state.currentUser = action.value
                   }
        
        default:
            return state
    }
}


