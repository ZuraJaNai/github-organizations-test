import React from "react";

const Input = props => {
  return (
    <input
      type="text"
      name="searchField"
      value={props.value}
      onChange={props.handleChange}
    />
  );
};

export default Input;
