// @flow

import { createStore, applyMiddleware, compose } from "redux"
import promise from "redux-promise"
import reducer from "./reducers"
import { isProductionBuild } from "./utils/env"

export const configureStoreProd = (initialState: any) => {
  const finalCreateStore = compose(applyMiddleware(promise))(createStore)
  return finalCreateStore(reducer, initialState)
}

export const configureStoreDev = (initialState: any) => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  /* eslint-enable */
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(promise))
  )
}

export const store = isProductionBuild
  ? configureStoreProd()
  : configureStoreDev()
