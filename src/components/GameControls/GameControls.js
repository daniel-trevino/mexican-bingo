// @flow

import React, { Component } from "react"
import { Button } from "antd"
import SocketContext from "../SocketContext"

type Props = {
  initPack: Function,
  newCard: Function,
  socket: any
}

class GameControls extends Component<Props> {
  startGame = () => {
    const { initPack, socket } = this.props
    initPack(socket)
  }

  drawCard = () => {
    const { newCard, socket } = this.props
    newCard(socket)
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.startGame}>
          Start game
        </Button>
        <Button type="button" onClick={this.drawCard}>
          Draw a card
        </Button>
      </div>
    )
  }
}

const GameControlsWithSocket = (props: Object) => (
  <SocketContext.Consumer>
    {socket => <GameControls {...props} socket={socket} />}
  </SocketContext.Consumer>
)

export default GameControlsWithSocket
