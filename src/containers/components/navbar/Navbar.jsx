import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="container-navbar">
      <div className="left-nav">
        <span className="material-symbols-rounded">menu</span>
      </div>
      <div className="middle-nav"></div>
      <div className="right-nav">
        <span className="material-symbols-rounded">notifications</span>
      </div>
    </nav>
  );
};

export default Navbar;
