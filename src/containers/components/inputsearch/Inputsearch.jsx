import React, { useState } from "react";
import "./Inputsearch.scss";

const Inputsearch = ({}) => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="container-inputsearch">
        <span class="material-symbols-rounded">search</span>
        <input type="text" placeholder="Search" onChange={(e) => setInput()} />
      </div>
    </>
  );
};

export default Inputsearch;
