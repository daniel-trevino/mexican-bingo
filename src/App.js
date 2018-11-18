// @flow

import * as React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./theme/globalStyle"
import Routes from "./Routes"
import theme from "./theme/theme"

type Props = {}

class App extends React.Component<Props> {
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
