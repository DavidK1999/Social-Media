import * as NavActionTypes from '../actionTypes/nav'

export const filterFetch = value => {
    return {
        type: NavActionTypes.FILTERFETCH,
        value
    }
}
