import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./SearchPage.jsx";
import Navbar from "./Navbar.jsx";
import OrganizationInfo from "./OrganizationInfo.jsx";
import UserInfo from "./UserInfo.jsx";
import PageNotFound from "./PageNotFound.jsx";
import UserFollow from "./UserFollow.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/organization/:name" component={OrganizationInfo} />
        <Route exact path="/user/:name" component={UserInfo} />
        <Route
          exact
          path="/user/:name/following"
          component={() => <UserFollow type="following" />}
        />
        <Route
          exact
          path="/user/:name/followers"
          component={() => <UserFollow type="followers" />}
        />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
