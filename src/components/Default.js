// @flow

import React, { Component } from "react"
import styled from "styled-components"

const AppWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  height: 12rem;
  padding: 1rem;
  color: white;
`

const AppTitle = styled.h1`
  font-weight: 900;
  color: ${props => props.theme.primaryColor};
  display: block;
`

class Default extends Component<{}> {
  render() {
    return (
      <AppWrapper>
        <AppHeader>
          <AppTitle>Mexican Bingo</AppTitle>
        </AppHeader>
      </AppWrapper>
    )
  }
}

export default Default
