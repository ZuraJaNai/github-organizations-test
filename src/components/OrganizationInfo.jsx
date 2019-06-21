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

  createItem = data => {
    const userName = data.login;
    return (
      <div key={userName}>
        <img alt="avatar" src={data.avatar_url} />
        <Link to={`/user/${userName}`}>
          <h3>{userName}</h3>
        </Link>
        <Link to={`/user/${userName}/followers`}>
          <h5>Followers</h5>
        </Link>
        <Link to={`/user/${userName}/followers`}>
          <h5>Following</h5>
        </Link>
      </div>
    );
  };

  render() {
    const { name, info } = this.state;
    return (
      <div>
        <div>
          <img alt="avatar" src={info.avatar_url} />
          <h2>{info.login}</h2>
          {info.bio ? <p>{`Bio: ${info.bio}`}</p> : null}
        </div>
        <div>
          <h3>Organization members</h3>
          <List
            createItem={this.createItem}
            url={`https://api.github.com/orgs/${name}/members`}
          />
        </div>
      </div>
    );
  }
}

export default OrganizationInfo;
