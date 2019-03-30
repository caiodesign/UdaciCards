import { combineReducers } from 'redux'
import CardDeckReducer from './CardDeckReducer'
import CardDeckDetailReducer from './CardDeckDetailReducer'

export default combineReducers({
  decks: CardDeckReducer,
  CardDeckDetail: CardDeckDetailReducer,
})
