import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useRouteMatch} from 'react-router-dom'
import {Grid, Icon} from 'semantic-ui-react'
import Upvote from './Upvote'
import Upvoted from './Upvoted'
import Tag from './Tag'
import '../styles/card.css'
import { getProfilePosts, getPosts, getLikedPosts, getPersonalPosts, getTaggedPosts } from '../redux/actions/card'

const Feed = () => {
    const dispatch = useDispatch()
    const match = useRouteMatch()
    const cards = useSelector(state => state.card.cards)
    const explore = match.path ==='/explore'
    const home = match.path ==='/home'
    const profilePath = match.path === "/:username"
    const likesPath = match.path ==="/:username/likes"
    const taggedPath = match.path === "/tagged/:tag"
    const tag = match.params.tag
    const profile = match.params.username;

    useEffect(() => {
        if(explore)      dispatch(getPosts())
        if(home)         dispatch(getPersonalPosts())
        if(profilePath)  dispatch(getProfilePosts(profile))
        if(likesPath)    dispatch(getLikedPosts(profile))
        if(taggedPath)   dispatch(getTaggedPosts(tag))
        console.log(match)
    }, [match.path])

    const cardList = cards && cards.map((card, i) => {
        return(
            <Grid.Row id="card-row" key={i}>
                <Link to={`/${card.user_username}`}><Icon name="user circle"/></Link>
                <div className="card-content">
                    <div className="user-user-options">{card.user_username} <Icon name="chevron down"/></div>
                    <Tag card={card}/>
                    <div className="card-menu">
                    {card.upvoted ? <Upvoted/> : <Upvote card={card}/>}
                    </div>
                </div>
            </Grid.Row>
        )
    })
    
    return (
        <>
        {cardList}
        </>
    );
}
 
export default Feed;