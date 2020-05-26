import React from "react";
import "./Header.css";
import SearchField from "./SearchField";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header__container">
      <h1 className="header__container-title">SW DB</h1>
      <NavBar />
      <SearchField />
    </div>
  );
};

export default Header;
