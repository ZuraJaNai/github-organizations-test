import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    inputId, inputText, value, handleChange,
  } = props;
  return (
    <div className="input-form">
      <input
        type="text"
        id={inputId}
        placeholder={inputText}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={inputId}>{inputText}</label>
    </div>
  );
};

Input.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
