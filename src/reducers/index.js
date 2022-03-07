import { cardsReducer as cards } from './cardsReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    cards
})

export default reducer
