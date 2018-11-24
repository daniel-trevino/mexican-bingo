// @flow

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./configureStore"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

function start() {
  const rootElement = document && document.getElementById("root")

  if (!rootElement) {
    throw new Error("Cannot mount React, no root element found")
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister()
}

start()
