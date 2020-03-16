import * as UserActionTypes from '../actionTypes/user'

const initialState = {
    userData: {}
}


export default function Card(state=initialState, action) {
    switch(action.type) {
        case UserActionTypes.PROFILE:
            return {...state, userData: state.userData = action.value}
        case UserActionTypes.LIKE:
            return {...state, userData: state.userData = action.value}
        default:
            return state
    }
}
