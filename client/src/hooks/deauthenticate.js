import React from 'react'
import {deauthenticate} from '../redux/actions/auth'
import { useDispatch } from 'react-redux'

const Deauthenticate = () => {
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(deauthenticate())
        window.sessionStorage.token = undefined
    }
    return logout
}
 
export default Deauthenticate;