import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from './List';
import Info from './Info';

const UserFollow = (props) => {
  const {
    type,
    match: {
      params: { name },
    },
  } = props;
  let titleText;
  if (type === 'following') {
    titleText = `Users followed by ${name}`;
  } else {
    titleText = `Users following ${name}`;
  }
  const title = <h3 className="title">{titleText}</h3>;

  const createItem = (data) => {
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
      <List createItem={createItem} url={`https://api.github.com/users/${name}/${type}`} />
    </div>
  );
};

UserFollow.propTypes = {
  type: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default UserFollow;
