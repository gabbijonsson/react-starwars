import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [everyoneSelected, setEveryoneSelected] = useState(false);
  const [favoritesSelected, setFavoriteSelected] = useState(false);
  const [addFavoriteSelected, setAddFavoriteSelected] = useState(false);

  return (
    <>
      <Link to="/" className="navbar__link-everyone">
        <button
          onClick={() => {
            setEveryoneSelected(true);
            setFavoriteSelected(false);
            setAddFavoriteSelected(false);
            props.setVisibilityStatus(true);
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
            setAddFavoriteSelected(false);
            props.setVisibilityStatus(false);
          }}
          className={`navbar__button ${favoritesSelected ? "selected" : ""}`}
        >
          Favorites
        </button>
      </Link>
      <Link to="/addfavorite" className="navbar__link-addfavorite">
        <button
          onClick={() => {
            setEveryoneSelected(false);
            setFavoriteSelected(false);
            setAddFavoriteSelected(true);
            props.setVisibilityStatus(false);
          }}
          className={`navbar__button ${addFavoriteSelected ? "selected" : ""}`}
        >
          +
        </button>
      </Link>
    </>
  );
};

export default NavBar;
