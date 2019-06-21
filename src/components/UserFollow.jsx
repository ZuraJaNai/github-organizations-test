import React from "react";
import { Link } from "react-router-dom";
import List from "./List.jsx";

const UserFollow = props => {
  let title;
  if (props.type === "following") {
    title = <h3>{`Users followed by ${props.match.params.name}`}</h3>;
  } else {
    title = <h3>{`Users following ${props.match.params.name}`}</h3>;
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

  return (
    <div>
      {title}
      <List
        createItem={createItem}
        url={`https://api.github.com/users/${props.match.params.name}/${
          props.type
        }`}
      />
    </div>
  );
};

export default UserFollow;
