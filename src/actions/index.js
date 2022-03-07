export const CARDS_ACTION_TYPE = {
    SET_CARD: 'SET_CARD',
    SET_CARDS: 'SET_CARDS',
    SELECT_CARD: 'SELECT_CARD',
    DUPLICATE_CARDS: 'DUPLICATE_CARDS',
}

export const setAllCards = (cards) => async (dispatch) => {
    dispatch({
        type: CARDS_ACTION_TYPE.SET_CARDS,
        payload: cards,
    })
}

export const setOneCard = (cardId, card) => async (dispatch) => {
    dispatch({
        type: CARDS_ACTION_TYPE.SET_CARD,
        payload: { id: cardId, card },
    })
}

export const setSelectedCard = (card) => async (dispatch) => {
    dispatch({
        type: CARDS_ACTION_TYPE.SELECT_CARD,
        payload: card
    })
}

