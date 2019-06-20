import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
  return (
    <div>
      <Link to={props.url}>
        <p>{props.text}</p>
      </Link>
    </div>
  );
};

export default Item;
