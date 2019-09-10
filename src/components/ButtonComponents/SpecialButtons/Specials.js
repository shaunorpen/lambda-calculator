import React from "react";

//import any components needed
import SpecialButton from "./SpecialButton";
//Import your array data to from the provided data file
import {specials} from "../../../data";

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {
        specials.map(special => <SpecialButton value={special} key={special} />)
      }
    </div>
  );
};

export default Specials;