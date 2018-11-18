// @flow

import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
import logo from "../logo.svg"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppWrapper = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const AppHeader = styled.div`
  background-color: #222;
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
          <AppLogo src={logo} alt="logo" />
          <AppTitle>Welcome to React</AppTitle>
        </AppHeader>
      </AppWrapper>
    )
  }
}

export default Default
