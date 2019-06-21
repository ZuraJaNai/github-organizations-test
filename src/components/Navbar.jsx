import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { refresh } = props;
  return (
    <nav>
      <Link to="/" onClick={refresh}>
        <p>GitHub Organizations</p>
      </Link>
    </nav>
  );
};

Navbar.propTypes = {
  refresh: PropTypes.func.isRequired,
};

export default Navbar;
