import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useRouteMatch} from 'react-router-dom'
import {Grid, Icon} from 'semantic-ui-react'
import Upvote from './Upvote'
import Upvoted from './Upvoted'
import '../styles/card.css'
import { getProfilePosts, getPosts, getLikedPosts, getPersonalPosts } from '../redux/actions/card'

const Feed = () => {
    const match = useRouteMatch()
    const dispatch = useDispatch()
    const cards = useSelector(state => state.card.cards)
    const path = window.location.pathname
    const explore = path ==='/explore'
    const home = path ==='/home'
    const profile = match.params.username; 
    const likes = path.split('/');

    useEffect(() => {
        if(explore)  dispatch(getPosts())
        if(home)     dispatch(getPersonalPosts())
        if(profile)  dispatch(getProfilePosts(profile))
        if(likes[2])    dispatch(getLikedPosts(profile))
        console.log(profile)
    }, [path])

    const cardList = cards && cards.map((card, i) => {
        return(
            <Grid.Row id="card-row" key={i}>
                <Link to={`/${card.user_username}`}><Icon name="user circle"/></Link>
                <div className="card-content">
                    <div className="user-user-options">{card.user_username} <Icon name="chevron down"/></div>
                    <p>{card.body}</p>
                    <div className="card-menu">
                    {card.upvoted 
                        ?
                            <Upvoted/>
                        :
                            <Upvote card={card._id}/>
                    }
                        <Icon name="comment outline"/>
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