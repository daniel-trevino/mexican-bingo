// @flow

import React, { Component } from "react"
import styled from "styled-components"
import { media } from "../utils/media"
import logo from "../images/logo.png"

const HeaderWrapper = styled.div`
  text-align: center;
`

const AppHeader = styled.div`
  background-color: ${props => props.theme.primaryColor};
  width: 100%;
  height: 100%;
`

const AppLogo = styled.img`
  margin: 3rem 0;
  width: 100%;
  height: 100%;
  max-height: 25%;
  max-width: 25%;
  ${media.phone`
    max-height: 40%;
    max-width: 40%;
  `};
`

class Header extends Component<{}> {
  render() {
    return (
      <HeaderWrapper>
        <AppHeader>
          <AppLogo src={logo} />
        </AppHeader>
      </HeaderWrapper>
    )
  }
}

export default Header
