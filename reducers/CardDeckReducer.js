import { FETCH_DECK_DB, DELETE_DECK } from '../actions/types'

const INITIAL_STATE = {
  decks: [],
}

export default (state = INITIAL_STATE, action) => {
  const newState = { ...state }
  switch (action.type) {
    case FETCH_DECK_DB:
      return { ...newState, decks: action.payload }
    case DELETE_DECK:
      return { ...newState, decks: action.payload }
    default:
      return newState
  }
}
