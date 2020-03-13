import React from 'react'
import {Grid} from 'semantic-ui-react'
import {useSelector} from 'react-redux'
import '../styles/card.css'

const CardList = () => {
    const allCards = useSelector(state => state.card.cards)

    const cardList = allCards && allCards.map((card, i) => {
        return(
            <Grid.Row id="card-row">
                Hey
            </Grid.Row>
        )
    })
    
    return (
        <>
        {cardList}
        </>
    );
}
 
export default CardList;