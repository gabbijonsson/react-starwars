import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [everyoneSelected, setEveryoneSelected] = useState(false);
  const [favoritesSelected, setFavoriteSelected] = useState(false);

  return (
    <>
      <Link to="/everyone" className="navbar__link-everyone">
        <button
          onClick={() => {
            setEveryoneSelected(true);
            setFavoriteSelected(false);
          }}
          className={`navbar__button ${everyoneSelected ? "selected" : ""}`}
        >
          Everyone
        </button>
      </Link>
      <Link to="/favorites" className="navbar__link-favorites">
        <button
          onClick={() => {
            setEveryoneSelected(false);
            setFavoriteSelected(true);
          }}
          className={`navbar__button ${favoritesSelected ? "selected" : ""}`}
        >
          Favorites
        </button>
      </Link>
    </>
  );
};

export default NavBar;
