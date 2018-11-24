// @flow

import * as React from "react"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom"
import Frontpage from "./pages/Frontpage"
import Admin from "./pages/Admin"
import paths from "./utils/paths"

class Routes extends React.Component<{}> {
  render() {
    return (
      <Router>
        <Switch>
          {/* <PageLayout> */}
          <Switch>
            <Route path={paths.frontpage()} exact component={Frontpage} />
            <Route path={paths.admin()} exact component={Admin} />
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
