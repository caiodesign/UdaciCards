import { FETCH_DECK_DB, FETCH_DECK_INFO, DELETE_DECK } from './types'

export const fetchDeckDB = data => ({ type: FETCH_DECK_DB, payload: data })
export const deleteDeck = deck => ({ type: DELETE_DECK, payload: deck })
export const getCardDeckDetails = cardDeck =>
  ({ type: FETCH_DECK_INFO, payload: JSON.parse(cardDeck) })
