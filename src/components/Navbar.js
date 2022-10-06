import React from "react";

import Logo from "../assets/planet-earth.svg";

import "./Navbar.scss";

export function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <h5 className="title">My travel journal</h5>
    </nav>
  );
}
