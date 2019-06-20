import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserInfo = props => {
  const [info, setInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.match.params.name}`)
      .then(({ data }) => {
        setInfo(data);
      });
  }, [props.match.params.name]);

  return info ? (
    <div>
      <img alt="avatar" src={info.avatar_url} />
      <h3>{info.login}</h3>
      <p>{`Public repositories: ${info.public_repos}`}</p>
      <Link to={`/user/${info.login}/followers`}>
        <p>{`Followers:${info.followers}`}</p>
      </Link>
      <Link to={`/user/${info.login}/followers`}>
        <p>{`Following:${info.following}`}</p>
      </Link>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UserInfo;
