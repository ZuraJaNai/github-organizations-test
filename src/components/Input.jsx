import React from "react";

const Input = props => {
  return (
    <div className="input-form">
      <input
        type="text"
        id={props.inputId}
        placeholder={props.inputText}
        value={props.value}
        onChange={props.handleChange}
      />
      <label htmlFor={props.inputId}>{props.inputText}</label>
    </div>
  );
};

export default Input;
