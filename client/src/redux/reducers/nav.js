import * as NavActionTypes from '../actionTypes/nav'

const initialState = {
    filter: ''
}

export default function Nav(state=initialState, action) {
    switch(action.type) {
        case NavActionTypes.FILTERFETCH:
            return {...state, filter: state.filter = action.value}
        default:
            return state
    }
}
