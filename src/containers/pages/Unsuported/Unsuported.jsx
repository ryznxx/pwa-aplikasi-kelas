import React from "react";
import "./Unsuported.scss";

const Unsuported = () => {
  return (
    <main className="unsupported-device">
      <img src="https://www.svgrepo.com/show/497000/danger.svg" alt="wait" />
      <p>maaf aplikasi tidak mendukung device yang anda gunakan</p>
    </main>
  );
};

export default Unsuported;
