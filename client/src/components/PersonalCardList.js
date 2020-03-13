import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import{getPersonalPosts} from '../redux/actions/card'
import {Grid, Icon} from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import '../styles/card.css'

const PersonalCardList = () => {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.card.cards)
    
    useEffect(() => {
        dispatch(getPersonalPosts())
        console.log(cards)
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
 
export default PersonalCardList;