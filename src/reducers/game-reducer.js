// @flow

import {
  GAME_ENDED,
  INIT_PACK,
  SET_PACK,
  DRAW_CARD,
  SET_CURRENT_CARD
} from "../actionTypes"
import { pack } from "../utils/variables"

const shufflePack = () => pack.sort(() => Math.random() - 0.5)

const initialState = {
  pack: [],
  currentCard: null
}

export default function(state: Object = initialState, action: Object) {
  switch (action.type) {
    case INIT_PACK: {
      const newPack = shufflePack()

      action.payload.emit("startGame", newPack)

      return {
        ...state,
        pack: newPack
      }
    }
    case SET_PACK:
      return {
        ...state,
        pack: action.payload
      }
    case DRAW_CARD: {
      const tempPack = state.pack
      const tempActiveCard = tempPack.slice(0, 1)[0]

      tempPack.shift() // Removes the card

      action.payload.emit("currentCard", tempActiveCard)

      return {
        ...state,
        pack: tempPack,
        currentCard: tempActiveCard
      }
    }
    case SET_CURRENT_CARD: {
      return {
        ...state,
        currentCard: action.payload
      }
    }
    case GAME_ENDED:
      return {}
    default:
      return state
  }
}
