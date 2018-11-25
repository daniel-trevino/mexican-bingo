// @flow

import React, { Component } from "react"
import styled from "styled-components"
import { Button, Alert } from "antd"
import SocketContext from "../SocketContext"
import type { Card, Pack } from "../../types/Game"
import { NO_GAME_TEXT, GAME_STARTED_TEXT } from "../../utils/translations"

type Props = {
  pack: Pack,
  currentCard: Card,
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
`

const AlertWrapper = styled.div`
  margin-bottom: 3rem;
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

  renderGameInformation = () => {
    const { pack, currentCard } = this.props
    const noGameStarted = pack.length === 0
    const gameStarted = Boolean(pack.length) && !currentCard

    if (noGameStarted) {
      return (
        <AlertWrapper>
          <Alert message={NO_GAME_TEXT} type="warning" showIcon />
        </AlertWrapper>
      )
    }

    if (gameStarted) {
      return (
        <AlertWrapper>
          <Alert message={GAME_STARTED_TEXT} type="success" showIcon />
        </AlertWrapper>
      )
    }

    return (
      <AlertWrapper>
        <Alert message={currentCard.name} type="info" showIcon />
      </AlertWrapper>
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderGameInformation()}
        <LocalButton>
          <Button type="primary" onClick={this.startGame} block>
            Start game
          </Button>
        </LocalButton>

        <LocalButton>
          <Button type="button" onClick={this.drawCard} block>
            Draw a card
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
