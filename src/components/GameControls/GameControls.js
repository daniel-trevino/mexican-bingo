// @flow

import React, { Component } from "react"
import styled from "styled-components"
import { Button } from "antd"
import GameInformation from "../GameInformation/GameInformationContainer"
import SocketContext from "../SocketContext"
import { media } from "../../utils/media"
import { START_GAME_TEXT, DRAW_CARD_TEXT } from "../../utils/translations"

type Props = {
  initPack: Function,
  newCard: Function,
  socket: any
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  text-align: center;

  align-items: center;
`

const LocalButton = styled.div`
  margin: 1rem 0em;
  width: 20%;
  ${media.phone`
    width: 100%;
  `}
`

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
      <Wrapper>
        <GameInformation isAdmin />
        <LocalButton>
          <Button type="primary" onClick={this.startGame} block>
            {START_GAME_TEXT}
          </Button>
        </LocalButton>

        <LocalButton>
          <Button type="button" onClick={this.drawCard} block>
            {DRAW_CARD_TEXT}
          </Button>
        </LocalButton>
      </Wrapper>
    )
  }
}

const GameControlsWithSocket = (props: Object) => (
  <SocketContext.Consumer>
    {socket => <GameControls {...props} socket={socket} />}
  </SocketContext.Consumer>
)

export default GameControlsWithSocket
