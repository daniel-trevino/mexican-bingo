// @flow

import { connect } from "react-redux"
import { GAME_ENDED, INIT_PACK, DRAW_CARD } from "../../actionTypes"
import GameControls from "./GameControls"

// Gets the data that is on the store
const mapStateToProps = (state: Object): Object => {
  const { pack } = state.game
  return { pack }
}

const mapDispatchToProps = (dispatch: Function): Object => ({
  initPack: payload =>
    dispatch({
      type: INIT_PACK,
      payload
    }),
  newCard: payload =>
    dispatch({
      type: DRAW_CARD,
      payload
    }),
  endGame: () => dispatch({ type: GAME_ENDED })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameControls)
