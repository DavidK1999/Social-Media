import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Grid, Icon} from 'semantic-ui-react'
import Upvote from './Upvote'
import Upvoted from './Upvoted'
import '../styles/card.css'
import { getPersonalPosts, getPosts } from '../redux/actions/card'

const Feed = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.card.cards)
    const path = window.location.pathname
    const explore = path ==='/explore'
    const personal = path ==='/home' || path ==="/profile"

    useEffect(() => {
        if(explore) dispatch(getPosts())
        if(personal) dispatch(getPersonalPosts())
    }, [])
    
    
    const cardList = cards && cards.map((card, i) => {
        return(
            <Grid.Row id="card-row" key={i}>
                <Icon name="user circle"/>
                <div className="card-content">
                    <p>{card.user_username}</p>
                    <p>{card.body}</p>
                    <div className="card-menu">
                    {!card.verified 
                        ?
                            <Upvote card={card._id}/>
                        :
                            <Upvoted/>
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