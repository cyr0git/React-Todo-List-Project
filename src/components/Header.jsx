import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";


const Header = (props) => {
  const location = useLocation();

  const funcClick = () => {
    // console.log("click");
    props.onAdd();
  };

  return (
    <header className="header">
      <h1>{props.title}</h1>
      
      { location.pathname==='/' &&
        <Button
          color={props.showAddTask ? "red" : "green"}
          text={props.showAddTask ? "Close" : "Add"}
          onClick={funcClick}
        />
      }
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//Inline CSS in React JSX.
// const headerStyle = {
//   backgroundColor:"black",
//   color: "red"
// }
export default Header;
