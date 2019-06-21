import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <Link to="/" onClick={props.refresh}>
        <p>GitHub Organizations</p>
      </Link>
    </nav>
  );
};

export default Navbar;
