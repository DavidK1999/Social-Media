import * as AuthActionTypes from '../actionTypes/auth'
import { useHistory } from 'react-router-dom'


export const toggle = route => {
    return {
        type: AuthActionTypes.TOGGLE,
        route
    }
}

export const authenticate = (route, data) => {
    return async dispatch => {
        try {
            console.log(process.env.REACT_APP_SERVER)
            const response = await fetch(`/api/auth/${route}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json',
                    // 'auth-header': window.sessionStorage.token
                }
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            if(parsedResponse.status === 200) {
                window.sessionStorage.token = parsedResponse.token
               dispatch({type: AuthActionTypes.AUTHENTICATE, value: parsedResponse.user})
            } dispatch({type: AuthActionTypes.ERROR, value: parsedResponse.message})
        } catch (error) {
            console.log('Authenticate Error', error)
        }
    }
}

export const deauthenticate = () => {
    return {
        type: AuthActionTypes.DEAUTHENTICATE
    }
}