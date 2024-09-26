import React, { useState } from "react";
import "./Inputsearch.scss";

const Inputsearch = ({}) => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="container-inputsearch">
        <span className="material-symbols-rounded">search</span>
        <input
          type="text"
          placeholder="Cari Tugas"
          onChange={(e) => setInput()}
        />
      </div>
    </>
  );
};

export default Inputsearch;
