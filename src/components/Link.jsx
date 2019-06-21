import React from "react";
import { withRouter } from "react-router";

const Link = props => {
  const handleClick = () => {
    props.history.push(props.url);
  };
  return (
    <div className="link" onClick={handleClick}>
      {props.element}
    </div>
  );
};

export default withRouter(Link);
