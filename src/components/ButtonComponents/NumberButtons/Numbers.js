import React from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import {numbers} from "../../../data";

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
          numbers.map(number => <NumberButton number={number} key={number} setDisplay={props.setDisplay} currentDisplay={props.currentDisplay} />)
      }
    </div>
  );
};

export default Numbers;