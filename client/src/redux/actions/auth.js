import * as AuthActionTypes from '../actionTypes/auth'


export const toggle = route => {
    return {
        type: AuthActionTypes.TOGGLE,
        route
    }
}

export const authenticate = (route, data) => {
    return async dispatch => {
        try {
            console.log(route)
            console.log(data)
            const response = await fetch(`http://localhost:8000/api/auth/${route}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json',
                }
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            // dispatch({type: AuthActionTypes.AUTHENTICATE, value: parsedResponse.data.userData})
            // window.sessionStorage.token = parsedResponse.data.token
        } catch (error) {
            console.log('Authenticate Error', error)
        }
    }
}