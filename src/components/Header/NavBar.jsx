import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <button className="navbar__button-everyone navbar__button">
        Everyone
      </button>
      <button className="navbar__button-favorites navbar__button">
        Favorites
      </button>
    </>
  );
};

export default NavBar;
