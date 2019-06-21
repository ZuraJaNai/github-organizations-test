import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SearchPage from "./SearchPage.jsx";
import Navbar from "./Navbar.jsx";
import OrganizationInfo from "./OrganizationInfo.jsx";
import UserInfo from "./UserInfo.jsx";
import PageNotFound from "./PageNotFound.jsx";
import UserFollow from "./UserFollow.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem("value")
    };
  }

  refresh = () => {
    localStorage.removeItem("value");
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <Router>
        <Navbar refresh={this.refresh} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <SearchPage value={value} />}
          />
          <Route
            exact
            path="/organization/:name"
            component={OrganizationInfo}
          />
          <Route exact path="/user/:name" component={UserInfo} />
          <Route
            exact
            path="/user/:name/following"
            component={props => (
              <UserFollow
                {...props}
                key={props.match.params.name}
                type="following"
              />
            )}
          />
          <Route
            exact
            path="/user/:name/followers"
            component={props => (
              <UserFollow
                {...props}
                key={props.match.params.name}
                type="followers"
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
