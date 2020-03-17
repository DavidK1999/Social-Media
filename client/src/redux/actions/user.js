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
            dispatch({type: UserActionTypes.PROFILE, value: parsedResponse})
        } catch (error) {
            console.log(error)
        }
    }
}

export const likeProfile = username => {
    return async dispatch => {
        try {
            console.log(username)
            const response = await fetch(`http://localhost:8000/api/user/like/${username}`, {
                method: 'PUT',
                headers: {
                    'auth-token': window.sessionStorage.token
                }
            })

            const parsedResponse = await response.json()
            dispatch({type: UserActionTypes.PROFILE, value: parsedResponse})
            console.log(parsedResponse)
        } catch (error) {
            
        }
    }
}

export const followProfile = username => {
    return async (dispatch, getState) => {
        try {
            console.log(username)
            const response = await fetch(`http://localhost:8000/api/user/follow/${username}`, {
                method: 'PUT',
                headers: {
                    'auth-token':window.sessionStorage.token,
                }
            })
            const parsedResponse = await response.json()
            dispatch({type: UserActionTypes.PROFILE, value: parsedResponse})
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const followedProfile = username => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:8000/api/user/followed/${username}`, {
                method: 'PUT',
                headers: {
                    'auth-token':window.sessionStorage.token,
                }
            })
            const parsedResponse = await response.json()
            dispatch({type: UserActionTypes.PROFILE, value: parsedResponse})
        } catch (error) {
            
        }
    }
}