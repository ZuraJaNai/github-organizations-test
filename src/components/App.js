import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./SearchPage.jsx";
import Navbar from "./Navbar.jsx";
import OrganizationInfo from "./OrganizationInfo.jsx";
import UserInfo from "./UserInfo.jsx";
import PageNotFound from "./PageNotFound.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route path="/organization/:name" component={OrganizationInfo} />
        <Route path="/user/:name" component={UserInfo} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
