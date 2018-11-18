// @flow

import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans");
 
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Niramit', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`

export default GlobalStyle
