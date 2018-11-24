// @flow

import { combineReducers } from "redux"
import game from "./game-reducer"

export const allReducers = combineReducers({
  game
})

export default allReducers
