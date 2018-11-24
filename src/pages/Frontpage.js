// @flow

import React, { Component } from "react"
import { connect } from "react-redux"
import { SET_PACK, SET_CURRENT_CARD } from "../actionTypes"
import SocketContext from "../components/SocketContext"
import DefaultComponent from "../components/Default"
import CardListContainer from "../components/CardsList/CardsListContainer"

type Props = {
  socket: any,
  setPack: Function,
  setCurrentCard: Function
}

const mapDispatchToProps = (dispatch: Function): Object => ({
  setPack: payload =>
    dispatch({
      type: SET_PACK,
      payload
    }),
  setCurrentCard: payload =>
    dispatch({
      type: SET_CURRENT_CARD,
      payload
    })
})

class Frontpage extends Component<Props> {
  componentDidMount() {
    const { socket, setPack, setCurrentCard } = this.props
    socket.on("setPack", pack => {
      setPack(pack)
    })
    socket.on("setCurrentCard", currentCard => {
      console.log("Setting current card", currentCard)
      setCurrentCard(currentCard)
    })
  }

  render() {
    return (
      <>
        <DefaultComponent />
        <CardListContainer />
      </>
    )
  }
}

const FrontpageWithSocket = props => (
  <SocketContext.Consumer>
    {socket => <Frontpage {...props} socket={socket} />}
  </SocketContext.Consumer>
)

export default connect(
  null,
  mapDispatchToProps
)(FrontpageWithSocket)
