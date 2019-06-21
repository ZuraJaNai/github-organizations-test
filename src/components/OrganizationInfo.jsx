import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from './List';
import Info from './Info';

class OrganizationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.match.params.name,
      info: {},
    };
  }

  componentDidMount() {
    this.getOrganizationInfo();
  }

  getOrganizationInfo = () => {
    const { name } = this.state;
    axios.get(`https://api.github.com/users/${name}`).then((res) => {
      this.setState({ info: res.data });
    });
  };

  createItem = (data) => {
    const userName = data.login;
    const text = (
      <div>
        <Link to={`/user/${userName}`}>
          <p>{userName}</p>
        </Link>
        <Link to={`/user/${userName}/followers`}>
          <p>Followers</p>
        </Link>
        <Link to={`/user/${userName}/followers`}>
          <p>Following</p>
        </Link>
      </div>
    );
    return <Info key={userName} imgSrc={data.avatar_url} text={text} />;
  };

  render() {
    const { name, info } = this.state;
    if (info.login) {
      const text = (
        <div>
          <h2>{info.login}</h2>
          {info.bio ? <p>{`Bio: ${info.bio}`}</p> : null}
        </div>
      );
      return (
        <div>
          <Info bio imgSrc={info.avatar_url} text={text} />
          <h3 className="title">Organization members</h3>
          <List createItem={this.createItem} url={`https://api.github.com/orgs/${name}/members`} />
        </div>
      );
    }
    return <div className="loading">Loading...</div>;
  }
}

OrganizationInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
export default OrganizationInfo;
