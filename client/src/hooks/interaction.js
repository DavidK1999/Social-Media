import React from 'react';
import {upvotePost} from '../redux/actions/card'
import {likeProfile, followProfile, followedProfile} from '../redux/actions/user'
import { useDispatch } from 'react-redux';

const Interaction = () => {
    const dispatch = useDispatch()

    const upvote = card => {
        console.log(card)
        dispatch(upvotePost(card._id))
        dispatch(likeProfile(card.user_username))
    }

    const follow = (userToFollow) => {
        dispatch(followProfile(userToFollow))
        dispatch(followedProfile(userToFollow))
    }

    return {upvote, follow}
}
 
export default Interaction;