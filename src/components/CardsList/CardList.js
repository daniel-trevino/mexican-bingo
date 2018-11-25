// @flow

import React, { Component } from "react"
import posed, { PoseGroup } from "react-pose"
import styled from "styled-components"
import GameInformation from "../GameInformation/GameInformationContainer"
import type { Card } from "../../types/Game"
import { media } from "../../utils/media"

type Props = {
  currentCard: Card
}

type State = {
  isVisible: boolean
}

const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 150,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 30 },
      default: { duration: 500 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
})

const CardModal = styled(Modal)`
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.8rem;
  height: 100%;
  max-height: 50%;
  width: 35%;
  min-width: 450px;
  ${media.phone`
    min-width: 0px;
    width: 100%;
  `};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const CurrentCardTitle = styled.h1`
  margin-top: 2rem;
  font-weight: 900;
  color: ${props => props.theme.black};
`

const CurrentCard = styled.img`
  height: 100%;
  width: 60%;
  margin-bottom: 2rem;
`

class CardList extends Component<Props, State> {
  state = {
    isVisible: false
  }

  componentDidMount() {
    const { isVisible } = this.state
    if (!isVisible) {
      setTimeout(() => {
        this.setState({
          isVisible: true
        })
      }, 300)
    }
  }

  render() {
    const { isVisible } = this.state
    const { currentCard } = this.props

    return (
      <>
        <GameInformation />

        {currentCard && (
          <PoseGroup>
            {isVisible && [
              /* eslint-disable global-require */
              // If animating more than one child, each needs a `key`
              <CardModal key="modal" className="modal">
                <CurrentCardTitle>{currentCard.name}</CurrentCardTitle>
                <CurrentCard
                  src={require(`../../images/cards/${currentCard.id}. ${
                    currentCard.name
                  }.png`)}
                />
              </CardModal>
              /* eslint-enable global-require */
            ]}
          </PoseGroup>
        )}
      </>
    )
  }
}

export default CardList
