import {CARDS_ACTION_TYPE} from '../actions';
import {cloneDeep} from 'lodash';

const defaultState = {
    allCards: [],
    selectedCard: null
}

export const cardsReducer = (state = defaultState, action) => {

    switch (action.type) {
        case CARDS_ACTION_TYPE.SET_CARDS:
            return {
                ...state,
                allCards: action.payload
            }
        case CARDS_ACTION_TYPE.SET_CARD:
            const tempAllCards = cloneDeep(state.allCards)
            const tempCardIndex = tempAllCards.findIndex(card => card.id === action.payload.id)

            if (tempCardIndex === -1) {
                // something went wrong
                return { ...state }
            }

            const tempCard = tempAllCards[tempCardIndex]
            // only update changed fields
            Object.keys(action.payload.card).forEach(key => {
                tempCard[key] = action.payload.card[key]
            })

            return {
                ...state,
                allCards: tempAllCards
            }
        case CARDS_ACTION_TYPE.SELECT_CARD:
            return {
                ...state,
                selectedCard: action.payload
            }
        default:
            return state
    }
}
