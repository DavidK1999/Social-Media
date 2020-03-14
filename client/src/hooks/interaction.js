import React from 'react';
import {upvotePost} from '../redux/actions/card'
import { useDispatch } from 'react-redux';

const Interaction = () => {
    const dispatch = useDispatch()

    const upvote = card => {
        console.log(card)
        dispatch(upvotePost(card))
    }

    return upvote
}
 
export default Interaction;