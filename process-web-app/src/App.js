import React, { Component } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <PublicRoute
              restricted={true}
              component={SignIn}
              path={"/"}
              exact
            />
            <PublicRoute
              restricted={true}
              component={SignIn}
              path={"/signin"}
              exact
            />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
