import React from "react";

const NumberButton = (props) => {
  return (
    <button className="number" onClick={() => props.setDisplay(props.number)}>
      {props.number}
    </button>
  );
};

export default NumberButton;