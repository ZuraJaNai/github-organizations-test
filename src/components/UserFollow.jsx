import React from "react";
import { Link } from "react-router-dom";
import List from "./List.jsx";
import Info from "./Info.jsx";

const UserFollow = props => {
  let titleText;
  if (props.type === "following") {
    titleText = `Users followed by ${props.match.params.name}`;
  } else {
    titleText = `Users following ${props.match.params.name}`;
  }
  const title = <h3 className="title">{titleText}</h3>;

  const createItem = data => {
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
