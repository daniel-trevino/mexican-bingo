// @flow
import { connect } from "react-redux"
import CardList from "./CardList"

// Gets the data that is on the store
const mapStateToProps = (state: Object): Object => {
  const { currentCard, pack } = state.game
  return { currentCard, pack }
}

export default connect(
  mapStateToProps,
  null
)(CardList)
