import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};
Button.defaultProps = {
  backgroundColor: "steelblue",
  text: "Add",
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
