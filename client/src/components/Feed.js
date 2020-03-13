import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Grid, Icon} from 'semantic-ui-react'
import '../styles/card.css'
import { getPersonalPosts, getPosts } from '../redux/actions/card'

const Feed = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.card.cards)
    const path = window.location.pathname
    const explore = path ==='/explore'
    const home = path ==='/home'

    useEffect(() => {
        if(explore) dispatch(getPosts())
        if(home) dispatch(getPersonalPosts())
        console.log(cards.length)
    }, [cards.length])
    
    const cardList = cards && cards.map((card, i) => {
        return(
            <Grid.Row id="card-row">
                <Icon name="user circle"/>
                <div className="card-content">
                    <p>David Kalina @insane 18m</p>
                    <p>Hey guys, this is my first post and I think this app is truly insane</p>
                    <div className="card-menu">
                        <Icon name="heart outline"/>
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