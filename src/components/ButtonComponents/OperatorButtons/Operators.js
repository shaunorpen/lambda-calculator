import React from "react";

//import any components needed
import OperatorButton from "./OperatorButton";
//Import your array data to from the provided data file
import {operators} from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
        operators.map(operator => <OperatorButton char={operator.char} key={operator.value} />)
      }
    </div>
  );
};

export default Operators;