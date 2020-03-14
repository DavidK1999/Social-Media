import * as CardActionTypes from '../actionTypes/card'

export const post = (data, route) => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:8000/api/card/${route}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json',
                    'auth-token': window.sessionStorage.token
                }
            })
            const parsedResponse = await response.json()
            dispatch({type: CardActionTypes.POST, value: parsedResponse})
        } catch (error) {
            console.log('Authenticate Error', error)
        }
    }
}

export const getPosts = () => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:8000/api/card/all`, {
                headers: {
                    'auth-token' : window.sessionStorage.token
                }
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            dispatch({type: CardActionTypes.READ, value: parsedResponse})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPersonalPosts = () => {
    return async dispatch => {
        try {
            const response = await fetch(`http://localhost:8000/api/card/personal`, {
                headers: {
                    'auth-token' : window.sessionStorage.token
                }
            })
            const parsedResponse = await response.json()
            console.log(parsedResponse)
            dispatch({type: CardActionTypes.READ, value: parsedResponse})
        } catch (error) {
            console.log(error)
        }
    }
}

export const upvotePost = post => {
    return async dispatch => {
        try {
            console.log(post)
            const response = await fetch(`http://localhost:8000/api/card/upvote/${post}`, {
                method: 'PUT',
                headers: {
                    'auth-token': window.sessionStorage.token
                }
            })
            const parsedResponse = await response.json()
            dispatch({type: CardActionTypes.UPVOTE, value: parsedResponse})
        } catch (error) {
            console.log(error)
        }
    }
}


