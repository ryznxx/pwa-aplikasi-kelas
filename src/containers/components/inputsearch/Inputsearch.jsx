import React, { useState } from "react";
import "./Inputsearch.scss";

const Inputsearch = ({}) => {
  const [input, setInput] = useState("");
  return (
    <div className="container-inputsearch">
      <input type="text" onChange={(e) => setInput()} />
    </div>
  );
};

export default Inputsearch;
