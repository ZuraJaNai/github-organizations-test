import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import List from "./List.jsx";

const UserFollow = props => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${props.match.params.name}/${props.type}`
      )
      .then(({ data }) => {
        setUsers(data);
      });
  }, [props.match.params.name, props.type]);

  let title;
  switch (props.type) {
    case "following": {
      title = <h3>{`Users followed by ${props.match.params.name}`}</h3>;
    }
    case "followers": {
      title = <h3>{`Users following ${props.match.params.name}`}</h3>;
    }
  }
  const createItem = data => {
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

  return users ? (
    <div>
      {title}
      <List
        createItem={createItem}
        url={`https://api.github.com/users/${props.match.params.name}/${
          props.type
        }`}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UserFollow;
