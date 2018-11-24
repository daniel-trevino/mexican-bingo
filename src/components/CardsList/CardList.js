// @flow

import React, { Component } from "react"
import type { Card } from "../../types/Game"

type Props = {
  currentCard: Card
}

class CardList extends Component<Props> {
  render() {
    const { currentCard } = this.props

    if (!currentCard) {
      return <p>No Game on course</p>
    }

    return <p>{currentCard.name}</p>
  }
}

export default CardList
