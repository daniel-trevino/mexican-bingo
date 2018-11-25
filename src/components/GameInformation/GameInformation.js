// @flow

import React, { Component } from "react"
import styled from "styled-components"
import { Alert } from "antd"
import type { Card, Pack } from "../../types/Game"
import { NO_GAME_TEXT, GAME_STARTED_TEXT } from "../../utils/translations"

type Props = {
  pack: Pack,
  currentCard: Card,
  isAdmin: boolean
}

const AlertWrapper = styled.div`
  margin-bottom: 3rem;
`

class GameControls extends Component<Props> {
  render() {
    const { pack, currentCard, isAdmin } = this.props
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

    if (isAdmin) {
      return (
        <AlertWrapper>
          <Alert message={currentCard.name} type="info" showIcon />
        </AlertWrapper>
      )
    }

    return null
  }
}

export default GameControls
