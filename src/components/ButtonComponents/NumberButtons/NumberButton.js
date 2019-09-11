import React from "react";

const NumberButton = (props) => {

  function setDisplayValue (currDisp, newNum) {
    if (Number(currDisp) === 0) {
      return props.setDisplay(newNum);
    } else {
      return props.setDisplay(currDisp + newNum);
    }
  }

  return (
    <button className="number" onClick={() => setDisplayValue(props.currentDisplay, props.number)}>
      {props.number}
    </button>
  );
};

export default NumberButton;