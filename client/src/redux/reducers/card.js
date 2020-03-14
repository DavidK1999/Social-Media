import * as CardActionTypes from '../actionTypes/card'

const initialState = {
    cards: [],
}

export default function Card(state=initialState, action) {
    switch(action.type) {
        case CardActionTypes.READ:
            return {...state, cards: state.cards = action.value}
        case CardActionTypes.POST:
            return {...state, cards: state.cards = [...state.cards, action.value]}
        case CardActionTypes.UPVOTE:
            return {...state, cards: state.cards = state.cards.map((card) => {
               if(card._id === action.value._id) card = action.value
               return card
            })}

        default:
            return state
    }
}
