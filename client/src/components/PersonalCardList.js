import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import{getPersonalPosts} from '../redux/actions/card'
import {Grid} from 'semantic-ui-react'
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
                Personal
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