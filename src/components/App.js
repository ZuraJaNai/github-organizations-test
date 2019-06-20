import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Search from "./Search.jsx";
import Navbar from "./Navbar.jsx";
import OrganizationInfo from "./OrganizationInfo.jsx";
import PageNotFound from "./PageNotFound.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route path="/organization/:name" component={OrganizationInfo} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
