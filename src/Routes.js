// @flow

import * as React from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
import Frontpage from "./pages/Frontpage"
import paths from "./utils/paths"

class Routes extends React.Component<{}> {
  render() {
    return (
      <Router>
        <Switch>
          {/* <PageLayout> */}
          <Switch>
            <Route path={paths.frontpage()} exact component={Frontpage} />
            <Route render={() => <Redirect to={paths.frontpage()} />} />
          </Switch>
          {/* </PageLayout> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}

export default Routes
