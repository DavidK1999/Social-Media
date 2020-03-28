import React from 'react'
import {useDispatch} from 'react-redux'
import {deletePost} from '../redux/actions/card'

const Delete = () => {
    const dispatch = useDispatch()
    
    const deleteCard = post => {
        dispatch(deletePost(post))
    }

    return deleteCard
}
 
export default Delete;