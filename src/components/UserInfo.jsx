import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Info from './Info';

const UserInfo = (props) => {
  const [info, setInfo] = useState();
  const {
    match: {
      params: { name },
    },
  } = props;
  useEffect(() => {
    axios.get(`https://api.github.com/users/${props.match.params.name}`).then(({ data }) => {
      setInfo(data);
    });
  }, [name]);

  if (info) {
    const text = (
      <div>
        <h3>{info.login}</h3>
        {info.name ? <h4>{`Name: ${info.name}`}</h4> : null}
        {info.location ? <h4>{`Location: ${info.location}`}</h4> : null}
        {info.bio ? <p>{`Bio: ${info.bio}`}</p> : null}
        <p>{`Public repositories: ${info.public_repos}`}</p>
        <Link to={`/user/${info.login}/followers`}>
          <p>{`Followers:${info.followers}`}</p>
        </Link>
        <Link to={`/user/${info.login}/followers`}>
          <p>{`Following:${info.following}`}</p>
        </Link>
      </div>
    );
    return <Info bio imgSrc={info.avatar_url} text={text} />;
  }
  return <div>Loading...</div>;
};

UserInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default UserInfo;
