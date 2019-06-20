import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import List from "./List";

class OrganizationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      info: {}
      // users: {}
    };
  }

  componentDidMount() {
    this.getOrganizationInfo();
    //this.getMembersList();
  }

  getOrganizationInfo = () => {
    const { name } = this.state;
    axios.get(`https://api.github.com/users/${name}`).then(res => {
      this.setState({ info: res.data });
    });
  };

  // getMembersList = () => {
  //   const { name } = this.state;
  //   axios.get(`https://api.github.com/orgs/${name}/members`).then(res => {
  //     this.setState({ users: res.data });
  //   });
  // };
  createItem = data => {
    const userName = data.login;
    return (
      <div key={userName}>
        <Link to={`/user/${userName}`}>
          <h3>{userName}</h3>
        </Link>
      </div>
    );
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        {/* info */}
        <List
          createItem={this.createItem}
          url={`https://api.github.com/orgs/${name}/members`}
        />
      </div>
    );
  }
}

export default OrganizationInfo;
