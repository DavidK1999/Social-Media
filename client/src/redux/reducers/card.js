import * as CardActionTypes from '../actionTypes/card'

const initialState = {
    cards: [],
    error: '',
    'posting': false
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
        case CardActionTypes.ERROR:
            return {...state, error: state.error = action.value}

        default:
            return state
    }
}
