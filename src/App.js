// @flow

import * as React from "react"
import socketIOClient from "socket.io-client"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./theme/globalStyle"
import Routes from "./Routes"
import theme from "./theme/theme"

const SOCKET_URL = "http://localhost:8000"

type Props = {}

class App extends React.Component<Props> {
  componentDidMount() {
    this.socket = socketIOClient(SOCKET_URL)
    this.socket.on("connect", this.onConnection)
  }

  onConnection = () => {
    console.log("Client connected")
  }

  socket: any

  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <Routes />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
