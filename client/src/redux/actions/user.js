import * as UserActionTypes from '../actionTypes/user'

export const getProfile = username => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:8000/api/user/profile${username}`, {
                headers: {
                    'auth-token': window.sessionStorage.token
                }
            })

            const parsedResponse = await response.json()
            console.log(parsedResponse)
            dispatch({type: UserActionTypes.PROFILE, value: parsedResponse})
        } catch (error) {
            console.log(error)
        }
    }
}