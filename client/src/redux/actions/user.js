import * as UserActionTypes from '../actionTypes/user'

export const getProfile = username => {
    return async dispatch => {
        try {
            console.log(username)
            const response = await fetch(`http://localhost:8000/api/user${username}`, {
                headers: {
                    'auth-token': window.sessionStorage.token
                }
            })

            const parsedResponse = response.json()
            console.log(parsedResponse)
        } catch (error) {
            console.log(error)
        }
    }
}