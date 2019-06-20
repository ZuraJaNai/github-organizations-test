import React from "react";
import axios from "axios";

class OrganizationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      info: {},
      users: {}
    };
  }

  componentDidMount() {
    this.getOrganizationInfo();
    this.getMembersList();
  }

  getOrganizationInfo = () => {
    const { name } = this.state;
    axios.get(`https://api.github.com/users/${name}`).then(res => {
      this.setState({ info: res.data });
    });
  };

  getMembersList = () => {
    const { name } = this.state;
    axios.get(`https://api.github.com/orgs/${name}/members`).then(res => {
      this.setState({ info: res.data });
    });
  };

  render() {
    return <div>a</div>;
  }
}

export default OrganizationInfo;
