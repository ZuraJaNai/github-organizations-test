import React from 'react';
import PropTypes from 'prop-types';

const Info = (props) => {
  const { bio, imgSrc, text } = props;
  return (
    <div className={bio ? 'info bioInfo' : 'info shortInfo'}>
      <img className={bio ? 'bioImg' : ''} alt="avatar" src={imgSrc} />
      <div className={bio ? 'bioText' : 'text'}>{text}</div>
    </div>
  );
};

Info.propTypes = {
  bio: PropTypes.bool,
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.symbol.isRequired,
};

Info.defaultProps = {
  bio: false,
};

export default Info;
